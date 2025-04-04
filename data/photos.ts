import { Photo } from "../types";

export const photos: Photo[] = [
  {
    id: 1,
    coverImage:
      "https://res.cloudinary.com/dsudloo9k/image/upload/v1743769103/DSC_0818_1_-min_k7hwwi.jpg",
    title: "Mountain Sunrise",
    category: "Landscape",
    src: "/images/download.jpeg",
    description: "A beautiful sunrise over mountain ranges",
    location: "Rocky Mountains",
    tags: ["sunrise", "mountains", "nature"],
  },
  {
    id: 2,
    coverImage:
      "https://res.cloudinary.com/dsudloo9k/image/upload/v1743714538/DSC_0655_lccgdj.jpg",
    title: "Urban Portrait",
    category: "Portrait",
    src: "/images/download.jpeg",
    description: "Portrait session in an urban environment",
    location: "Downtown",
    tags: ["portrait", "urban", "people"],
  },
  {
    id: 3,
    coverImage:
      "https://res.cloudinary.com/dsudloo9k/image/upload/v1743714537/DSC_3723_kvjhbd.jpg",
    title: "Coastal Waves",
    category: "Seascape",
    src: "/images/download.jpeg",
    description: "Dramatic ocean waves hitting coastal rocks",
    location: "Pacific Coast",
    tags: ["ocean", "waves", "coast"],
  },
];
