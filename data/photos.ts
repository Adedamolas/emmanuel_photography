import { Photo } from "../types";

export const photos: Photo[] = [
  {
    id: 1,
    title: "Mountain Sunrise",
    category: "Landscape",
    src: "/images/download.jpeg",
    description: "A beautiful sunrise over mountain ranges",
    location: "Rocky Mountains",
    tags: ["sunrise", "mountains", "nature"],
  },
  {
    id: 2,
    title: "Urban Portrait",
    category: "Portrait",
    src: "/images/download.jpeg",
    description: "Portrait session in an urban environment",
    location: "Downtown",
    tags: ["portrait", "urban", "people"],
  },
  {
    id: 3,
    title: "Coastal Waves",
    category: "Seascape",
    src: "/images/download.jpeg",
    description: "Dramatic ocean waves hitting coastal rocks",
    location: "Pacific Coast",
    tags: ["ocean", "waves", "coast"],
  },
];
