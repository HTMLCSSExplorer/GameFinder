import { useFetchData } from './useFetchData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () =>
  useFetchData<Platform>('/xplatforms/lists/parents');
