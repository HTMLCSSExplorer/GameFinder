import { useGames, type Game } from '@/hooks/fetchGames';
import { Text, SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeltonn from './GameCardSkeltonn';
import BoxContainer from './BoxContainer';

import type { GameQuery } from '@/App';

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { error, entities: games, isLoading } = useGames(gameQuery);

  const renderSkelton = () => {
    return Array.from({ length: 20 }).map((_, i) => (
      <BoxContainer key={i}>
        <GameCardSkeltonn />
      </BoxContainer>
    ));
  };

  const renderGameCard = (games: Game[]) => {
    return games.map((game) => (
      <BoxContainer key={game.id}>
        <GameCard game={game}></GameCard>
      </BoxContainer>
    ));
  };

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
        {isLoading ? renderSkelton() : renderGameCard(games)}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
