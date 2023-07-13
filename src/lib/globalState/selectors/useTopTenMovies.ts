import { useAllMovies } from "./useAllMovies";
/**
 * Return the 10 most voted movies
 */
export const useTopTenMovies = () => {
  const movies = useAllMovies();

  // Reorder movies by vote in descending order
  movies.sort((a, b) => b.votes - a.votes);

  // Get top 10 movie titles
  const topTen: string[] = movies.slice(0, 10).map(movie => movie.title);

  return topTen;
};
