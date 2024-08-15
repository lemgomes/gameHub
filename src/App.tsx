import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlataformSelector from "./components/PlataformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

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
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} px={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} pl={2} mb={5}>
          <PlataformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
