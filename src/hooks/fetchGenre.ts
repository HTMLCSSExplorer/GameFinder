import genres from  '../data/genres'
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export const useGenre = () => ({
  error: null,
  isLoading: false,
  entities: genres,
});

