import type { GameQuery } from '@/App';
import { useFetchData } from './useFetchData';
import type { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: string;
}

export const useGames = (gameQuery: GameQuery) =>
  useFetchData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder?.value,
      },
    },

    [gameQuery]
  );
