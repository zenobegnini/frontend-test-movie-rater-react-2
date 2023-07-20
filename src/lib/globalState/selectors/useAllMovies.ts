import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

export interface IRatedMovie extends Movie {
  votes: number;
}

export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  /**
   * ! NOTE TASK 1
   * si poteva utilizzare il metodo map per ciclare l'array di movies e aggiungere la proprietà votes
   * sfruttando il relativo id per identivicare i voti corrispondenti, utilizzando successivamente
   * lo spread operator per semplificare ancora di più la sintassi
   *
   * const movies = state.movies.map((movie) => ({
   *   ...movie,
   *   votes: state.votes[movie.id] || 0,
   * }));
   *
   * return movies;
   *
   */

  const movies: IRatedMovie[] = [];

  for (let i = 0; i < state.movies.length; i++) {
    const newMap: IRatedMovie = {
      votes: state.votes[i + 1] ?? 0,
      id: state.movies[i].id,
      title: state.movies[i].title,
      author: state.movies[i].author,
      year: state.movies[i].year,
    };

    movies.push(newMap);
  }

  return movies;
};
