import { GridItem, Grid, HStack, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import type { Genre } from './hooks/fetchGenre';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/usePlatforms';
import SortSelector, { type SortOrderOption } from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrderOption | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area={'nav'}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area={'aside'} hideBelow={'lg'}>
        <GenresList
          selectedGenre={gameQuery?.genre ? gameQuery?.genre : null}
          onGenreSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area={'main'}>
        <Box paddingLeft={4}>
          <Box marginY={5}>
            <GameHeading gameQuery={gameQuery} />
          </Box>

          <HStack gap={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={
                gameQuery?.platform ? gameQuery?.platform : null
              }
              onPlatformChange={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedOrder={gameQuery.sortOrder ? gameQuery.sortOrder : null}
              onOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
