export interface Photo {
  id: number;
  title: string;
  category: string;
  src: string;
  description: string;
  date?: string; // Optional date when photo was taken
  location?: string; // Optional location information
  tags?: string[]; // Optional array of tags
}

export interface GalleryProps {
  photos: Photo[];
}

export interface LayoutProps {
  children: React.ReactNode;
}
