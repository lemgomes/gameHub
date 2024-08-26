import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlaformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlaformId);

  return (
    <Heading as="h1" my={5} fontSize={"5xl"}>{`${platform?.name || ""} ${
      genre?.name || ""
    } Games`}</Heading>
  );
};

export default GameHeading;
