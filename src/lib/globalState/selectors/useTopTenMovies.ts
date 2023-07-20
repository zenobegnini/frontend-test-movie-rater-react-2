import { useAllMovies } from "./useAllMovies";
/**
 * Return the 10 most voted movies
 */
export const useTopTenMovies = () => {
  console.log("FILM NON ORDINATI");

  /**
   * ! NOTE TASK 3
   * Non mi è chiaro il motivo per cui si è scelto di utilizzare let al posto di const per dichiarare movies
   * in quanto non dovrebbe essere modificata, al massimo poteva essere assegniata ad una nuova costante.
   * si poteva semplificare ritornando direttamente il risultato senza instanzionare la costante topTenMoviese
   * ed accondando il metodo sort con il metodo slice per ottenere i primi 10 film
   *
   * return movies.sort((a, b) => (a.votes > b.votes ? -1 : 1)).slice(0, 10);
   *
   */

  let movies = useAllMovies();

  // Reorder movies by vote in descending order
  movies = movies.sort((a, b) => b.votes - a.votes);

  // Get top 10 movie titles
  const topTen = movies.slice(0, 10);

  console.log("FILM ORDINATI");
  return topTen;
};
