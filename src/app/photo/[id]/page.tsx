import { notFound } from "next/navigation";
import { photos } from "../../../../data/photos";
import RootLayout from "@/app/layout";
import PhotoDetail from "@/app/components/gallery/PhoneDetail";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

export default function PhotoPage({ params }: PhotoPageProps) {
  const photoId = parseInt(params.id);
  const photo = photos.find((p) => p.id === photoId);

  if (!photo) {
    notFound();
  }

  return (
    <RootLayout>
      <PhotoDetail photo={photo} />
    </RootLayout>
  );
}

// Generate static paths for all photos
export async function generateStaticParams() {
  return photos.map((photo) => ({
    id: photo.id.toString(),
  }));
}
