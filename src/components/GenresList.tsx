import { useGenre, type Genre } from '@/hooks/fetchGenre';
import { Box, List, Text, Image, Link } from '@chakra-ui/react';

import SpinnerComp from './SpinnerComp';
import { getCroppedUrl } from '@/services/getCroppedUrl';

interface Props {
  onGenreSelect: (genre: Genre) => void;
}

function GenresList({ onGenreSelect: onGenreSelect }: Props) {
  const { isLoading, enntities: genres, error } = useGenre();

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <Box padding={4}>
        <List.Root variant={'plain'} gap={4}>
          {isLoading && <SpinnerComp />}
          {genres.map((genre) => (
            <List.Item
              className="cursor-pointer"
              key={genre.id}
              alignItems={'center'}
              gap={2}
              onClick={() => onGenreSelect(genre)}
            >
              <Image
                src={getCroppedUrl(genre.image_background)}
                width={'50px'}
                borderRadius={'5px'}
              />
              <Link>{genre.name}</Link>
            </List.Item>
          ))}
        </List.Root>
      </Box>
    </>
  );
}

export default GenresList;
