import type { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const headinng = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as={'h1'} autoCapitalize="on" fontSize={'5xl'}>
      {headinng}
    </Heading>
  );
}

export default GameHeading;
