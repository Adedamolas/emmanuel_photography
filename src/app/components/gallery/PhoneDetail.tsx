import Image from "next/image";
import { Photo } from "../../../../types";

interface PhotoDetailProps {
  photo: Photo;
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({ photo }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{photo.title}</h1>
      <p className="text-gray-600 mb-6">{photo.category}</p>

      <div className="relative w-full h-[600px] mb-6 rounded-lg overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="prose max-w-none">
        <p>{photo.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {photo.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 px-2 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {photo.location && (
          <div className="mt-4">
            <strong>Location:</strong> {photo.location}
          </div>
        )}

        {photo.date && (
          <div>
            <strong>Date:</strong> {photo.date}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetail;
