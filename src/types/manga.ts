export interface MangaCard {
  id: number;
  title: string;
  description: string;
  genre: string[];
  rating: number;
  chapters: number;
  imageUrl: string;
  trailerUrl: string;
}

export interface ChapterUpdate {
  id: number;
  mangaTitle: string;
  mangaImage: string;
  chapters: {
    number: number;
    title: string;
    releaseDate: string;
  }[];
}

export interface Comment {
  id: number;
  text: string;
  createdAt: string;
} 