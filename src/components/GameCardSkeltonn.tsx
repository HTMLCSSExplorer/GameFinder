import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

function GameCardSkeltonn() {
  return (
    <Card.Root>
      <Skeleton height={200} />
      <Card.Body>
        <HStack>
          <SkeletonCircle
            size={{
              base: 20,
              lg: 10,
            }}
          />
          <SkeletonText noOfLines={2} variant={'shine'} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeltonn;
