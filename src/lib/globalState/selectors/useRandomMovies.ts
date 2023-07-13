import { useGlobalState } from "../GlobalStateContext";
import { useMemo } from "react";
/**
 * Return 2 random movies
 */
export const useRandomMovies = () => {
  const { state } = useGlobalState();

  const randomMovies = useMemo(() => {
    const shuffledMovies = state.movies.sort(() => 0.5 - Math.random());
    return shuffledMovies.slice(0, 2);
  }, [state.movies]);

  return randomMovies;
};
