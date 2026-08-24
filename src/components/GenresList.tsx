import { useGenre, type Genre } from '@/hooks/fetchGenre';
import { Box, List, Text, Image, Link, Heading } from '@chakra-ui/react';

import SpinnerComp from './SpinnerComp';
import { getCroppedUrl } from '@/services/getCroppedUrl';

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresList({ selectedGenre, onGenreSelect: onGenreSelect }: Props) {
  const { isLoading, entities: genres } = useGenre();

  const isGenreSelected = (genre: Genre) => {
    return genre.id === selectedGenre?.id;
  };
  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genres
      </Heading>
      <Box>
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
                src={getCroppedUrl(genre.background_image)}
                width={'50px'}
                borderRadius={'5px'}
                objectFit="cover"
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
        </List.Root>
      </Box>
    </>
  );
}

export default GenresList;
