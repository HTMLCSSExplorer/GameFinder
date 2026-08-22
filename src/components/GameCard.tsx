import type { Game } from '@/hooks/fetchGames';
import { getCroppedUrl } from '@/services/getCroppedUrl';
import { Card, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Image src={getCroppedUrl(game.background_image)} />
      <Card.Body gapY={3}>
        <Heading fontSize={'lg'} fontWeight={'bold'}>
          {game.name}
        </Heading>
        <HStack justifyContent={'space-between'}>
          {
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          }
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
