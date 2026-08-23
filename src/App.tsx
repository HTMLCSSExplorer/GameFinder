import { GridItem, Grid } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import type { Genre } from './hooks/fetchGenre';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GenresList
          selectedGenre={selectedGenre ? selectedGenre : null}
          onGenreSelect={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area={'main'}>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre ? selectedGenre : null} />
      </GridItem>
    </Grid>
  );
}

export default App;
