
import genres from  '../data/genres'
export interface Genre {
  id: number;
  name: string;
  slug: string;
  background_image: string;
}

export const useGenre = () => ({
  error: null,
  isLoading: false,
  entities: genres,
});
