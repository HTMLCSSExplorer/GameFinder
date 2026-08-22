import { useFetchData } from './useFetchData';

export interface Game {
  id: number;
  name: string;
}

export interface FetchedGamesResponnse {
  count: number;
  results: Game[];
}

export const useGames = () =>
  useFetchData<Game>('/games', {
    params: {},
  });
