import { useGames } from '@/hooks/fetchGames';
import { List, Text } from '@chakra-ui/react';

function GameGrid() {
  const { error, enntities:games } = useGames();

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
