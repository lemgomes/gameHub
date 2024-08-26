import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Heading mb={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} py="5px">
            <HStack>
              <Image
                borderRadius={8}
                boxSize={"32px"}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "Bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
