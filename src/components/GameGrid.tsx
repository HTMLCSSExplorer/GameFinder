import apiClient from '@/services/apiClient';
import { ListItem, List, Text } from '@chakra-ui/react';
import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

export interface Game {
  id: number;
  name: string;
}

export interface FetchedGamesResponnse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    apiClient
      .get<FetchedGamesResponnse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err: AxiosError) =>
        err instanceof CanceledError ? null : setError(err)
      );
  }, []);
  return (
    <>
      <Text>{error && error?.message}</Text>
      <List.Root>
        {games.map((game) => (
          <List.Item key={game.id}>{game.name}</List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GameGrid;
