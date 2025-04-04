"use client";

import { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import { useInView } from "react-intersection-observer";
import { use } from "react";

interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface CategoryParams {
  category: string;
}

interface CategoryPageProps {
  params: Promise<CategoryParams>;
}
export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const initialFetchDone = useRef<boolean>(false);
  const photoIdsSet = useRef<Set<string>>(new Set());

  const { ref, inView } = useInView();

  const fetchPhotos = async (): Promise<void> => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const queryParams: Record<string, string> = {
        category,
        limit: "12",
      };

      if (nextCursor) {
        queryParams.cursor = nextCursor;
      }

      const query = new URLSearchParams(queryParams).toString();
      const res = await fetch(`/api/photos?${query}`);

      interface PhotosResponse {
        photos: Photo[];
        nextCursor: string | null;
        hasMore: boolean;
      }

      const data: PhotosResponse = await res.json();

      if (data.photos.length === 0) {
        setHasMore(false);
      } else {
        const newUniquePhotos = data.photos.filter(
          (photo) => !photoIdsSet.current.has(photo.id)
        );

        newUniquePhotos.forEach((photo) => photoIdsSet.current.add(photo.id));

        setPhotos((prev) => [...prev, ...newUniquePhotos]);
        setNextCursor(data.nextCursor);
        setHasMore(data.hasMore);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initialFetchDone.current = false;
    setPhotos([]);
    setNextCursor(null);
    setHasMore(true);
    photoIdsSet.current = new Set();

    fetchPhotos();
    initialFetchDone.current = true;
  }, [category, fetchPhotos]);

  useEffect(() => {
    if (inView && initialFetchDone.current) {
      fetchPhotos();
    }
  }, [inView]);

  const formattedCategory = category
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold mb-12">{formattedCategory}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="aspect-square relative">
            <CldImage
              width="800"
              height="800"
              src={photo.id}
              alt={`${formattedCategory} photography`}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-center align-middle mt-10 h-screen">
          <div className="w-12 h-12 rounded-full border-4 border-t-black border-r-gray-200 border-b-gray-200 border-l-gray-200 animate-spin"></div>
        </div>
      )}

      {hasMore && !isLoading && <div ref={ref} className="h-20"></div>}

      {!hasMore && photos.length > 0 && (
        <p className="text-center mt-10 text-gray-500">End of collection</p>
      )}

      {!isLoading && photos.length === 0 && (
        <p className="text-center mt-10">No photos found in this collection</p>
      )}
    </div>
  );
}
