import { useFetchData } from './useFetchData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchedGamesResponnse {
  count: number;
  results: Game[];
}

export const useGames = () =>
  useFetchData<Game>('/games', {
    params: {},
  });
