import { GridItem, Grid, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import type { Genre } from './hooks/fetchGenre';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <NavBar />
      </GridItem>
      <GridItem area={'aside'} hideBelow={'lg'}>
        <GenresList selectedGenre={gameQuery?.genre ? gameQuery?.genre : null} onGenreSelect={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
      <GridItem area={'main'}>
        <HStack paddingLeft={3} gap={5}  marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery?.platform ? gameQuery?.platform : null} onPlatformChange={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
