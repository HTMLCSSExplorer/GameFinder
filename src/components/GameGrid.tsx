import { useGames } from '@/hooks/fetchGames';
import { Text, SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

function GameGrid() {
  const { error, enntities: games } = useGames();

  return (
    <>
      <Text>{error && error?.message}</Text>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        gap={2}
        padding={3}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
