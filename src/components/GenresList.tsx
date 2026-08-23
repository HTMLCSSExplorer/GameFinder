import { useGenre, type Genre } from '@/hooks/fetchGenre';
import { Box, List, Text, Image, Link, Button } from '@chakra-ui/react';

import SpinnerComp from './SpinnerComp';
import { getCroppedUrl } from '@/services/getCroppedUrl';

interface Props {
  onGenreSelect: (genre: Genre) => void;
  onGenreClear: () => void;
  selectedGenre: Genre | null;
}

function GenresList({
  selectedGenre,
  onGenreSelect: onGenreSelect,
  onGenreClear,
}: Props) {
  const { isLoading, entities: genres, error } = useGenre();

  const isGenreSelected = (genre: Genre) => {
    return genre.id === selectedGenre?.id;
  };
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
              <Link
                variant={'plain'}
                colorPalette={isGenreSelected(genre) ? 'green' : ''}
                fontWeight={isGenreSelected(genre) ? 'bolder' : 'normal'}
              >
                {genre.name}
              </Link>
            </List.Item>
          ))}
          {!isLoading && (
            <List.Item
              className="cursor-pointer"
              alignItems={'center'}
              gap={2}
              onClick={onGenreClear}
            >
              <Button width={'full'}>Clear</Button>
            </List.Item>
          )}
        </List.Root>
      </Box>
    </>
  );
}

export default GenresList;
