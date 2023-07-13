import { List } from "@chakra-ui/react";
import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

interface IRatedMovie extends Movie {
  votes: number;
}

export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  const movies: IRatedMovie[] = [];

  for (let i = 0; i < state.movies.length; i++) {
    const newMap: IRatedMovie = {
      votes: state.votes[i],
      id: state.movies[i].id,
      title: state.movies[i].title,
      author: state.movies[i].author,
      year: state.movies[i].year
    };

    movies.push(newMap);
  }

  return movies;
};
