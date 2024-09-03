import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlataformSelector from "../components/PlataformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} px={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box pl={2}>
          <GameHeading />
          <Flex mb={5}>
            <Box mr={5}>
              <PlataformSelector />
            </Box>
            <SortSelector />
          </Flex>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
