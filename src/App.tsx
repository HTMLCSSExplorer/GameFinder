import { GridItem, Grid } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import type { Genre } from './hooks/fetchGenre';

function App() {
  const handleGenreSelect = (genre: Genre) => {
    console.log(genre);
  };
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
        <GenresList onGenreSelect={handleGenreSelect} />
      </GridItem>
      <GridItem area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
