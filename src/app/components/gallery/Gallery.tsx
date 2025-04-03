import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import Link from "next/link";
import { GalleryProps } from "../../../../types";

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
    >
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          className="mb-4 overflow-hidden rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={`/photo/${photo.id}`}>
            <div className="relative h-[300px] w-full">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-2 bg-white bg-opacity-90">
              <h3 className="text-lg font-medium">{photo.title}</h3>
              <p className="text-sm text-gray-600">{photo.category}</p>
              {photo.location && (
                <p className="text-xs text-gray-500">{photo.location}</p>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </Masonry>
  );
};

export default Gallery;
