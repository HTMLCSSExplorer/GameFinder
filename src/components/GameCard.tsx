import type { Game } from '@/hooks/fetchGames';
import { getCroppedUrl } from '@/services/getCroppedUrl';
import { Card, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={5} overflow={'hidden'}>
      <Image src={getCroppedUrl(game.background_image)} />
      <Card.Body gapY={3}>
        <Heading fontSize={'lg'} fontWeight={'bold'}>
          {game.name}
        </Heading>

        {
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        }
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
