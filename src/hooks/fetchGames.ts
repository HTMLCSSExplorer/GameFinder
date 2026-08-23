import type { Genre } from './fetchGenre';
import { useFetchData } from './useFetchData';
import type { Platform } from './usePlatforms';


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export const useGames = (selectedGenre: Genre | null) =>
  useFetchData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
      },
    },

    [selectedGenre?.id]
  );
