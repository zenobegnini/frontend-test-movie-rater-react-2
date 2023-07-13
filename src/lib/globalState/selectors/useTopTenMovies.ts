import { useAllMovies } from "./useAllMovies";
/**
 * Return the 10 most voted movies
 */
export const useTopTenMovies = () => {
  console.log("FILM NON ORDINATI");

  let movies = useAllMovies();

  // Reorder movies by vote in descending order
  movies = movies.sort((a, b) => b.votes - a.votes);

  // Get top 10 movie titles
  const topTen = movies.slice(0, 10);

  console.log("FILM ORDINATI");
  return topTen;
};
