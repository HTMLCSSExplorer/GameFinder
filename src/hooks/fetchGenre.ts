import { useFetchData } from './useFetchData';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export const useGenre = () => useFetchData<Genre>('/genres');
