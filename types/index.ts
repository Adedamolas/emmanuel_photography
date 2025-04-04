export interface Photo {
  id: number;
  coverImage: string;
  title: string;
  category: string;
  src: string;
  description: string;
  date?: string;
  location?: string;
  tags?: string[];
}

export interface GalleryProps {
  photos: Photo[];
}

export interface LayoutProps {
  children: React.ReactNode;
}
