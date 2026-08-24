import type { Game } from '@/hooks/fetchGames';
import { getCroppedUrl } from '@/services/getCroppedUrl';
import { Card, Heading, HStack, Image,Box } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root
      _hover={{
        transform: 'scale(105%)',
        transitionDuration: '200ms',
        cursor: 'pointer',
      }}
    >
      <Image src={getCroppedUrl(game.background_image)} />
      <Card.Body gapY={3}>
        <HStack justifyContent={'space-between'}>
          {
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          }
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'lg'} fontWeight={'bold'}>
          {game.name}{' '}
          <Box marginTop={3}>
            <Emoji rating={game.rating_top} />
          </Box>
        </Heading>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
