import { Box, ListItem, OrderedList, Progress } from "@chakra-ui/react";
import React from "react";
import { IRatedMovie } from "../../lib/globalState/selectors/useAllMovies";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { Title } from "../layout/Title";

export const TopTen: React.FC = () => {
  const movies: IRatedMovie[] = useTopTenMovies();

  /**
   * ! NOTE TASK 6
   * si poteva utilizzare il parametro opacity sull'elemento ListItem utilizzando una funzione per calcolare
   * l'opacità in base all'indice.
   *
   * <ListItem opacity={(movies.length - i) * 0.1} key={movie.id}>
   *
   *  Il valore della singola barra progress dovrebbe risultare in percentuale sulla base dei voti totali, quindi
   *  se i voti sono due la barra deve essere al 50% su due film
   *
   * const { state } = useGlobalState();
   * const votes = state.votes;
   *
   * const total = Object.values(votes).reduce((acc, vote) => acc + vote, 0);
   *
   * <Progress value={(movie.votes / total) * 100} ...
   */
  console.log(movies);
  return (
    <Box>
      <Title>Top ten</Title>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "linear-gradient(rgba(0, 0, 0, 0.9) 70%, rgba(0, 0, 0, 0) 100%)",
          paddingLeft: "8px",
        }}
      >
        <OrderedList>
          {movies.map((movie) => (
            <ListItem key={movie.id} style={{ margin: "0px" }}>
              <span style={{ alignItems: "center", display: "flex" }}>
                <Progress
                  value={movie.votes}
                  colorScheme="pink"
                  style={{
                    width: "10%",
                    margin: "3px",
                    display: "inline-block",
                    height: "8px",
                  }}
                />
                {movie.title} ({movie.votes} voti)
              </span>
            </ListItem>
          ))}
        </OrderedList>
      </div>
    </Box>
  );
};
