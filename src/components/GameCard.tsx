import type { Game } from '@/hooks/fetchGames';
import { getCroppedUrl } from '@/services/getCroppedUrl';
import { Card, Image, Text } from '@chakra-ui/react';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={5} overflow={'hidden'}>
      <Image src={getCroppedUrl(game.background_image)} />
      <Card.Body>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          {game.name}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
