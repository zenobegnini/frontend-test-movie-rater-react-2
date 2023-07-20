import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { useVote } from "../../lib/globalState/mutations/useVote";
import { useRandomMovies } from "../../lib/globalState/selectors/useRandomMovies";
import { State } from "../../lib/globalState/types";
import { Title } from "../layout/Title";

export const Vote: React.FC = () => {
  const movies = useRandomMovies();
  const [value, select, vote] = useVote();
  const goTo = useGoTo();

  /**
   * ! NOTE TASK 4
   * si poteva verificare se era presente un voto utilizzando il valore di value che ritorna da useVote
   * e controllondo se questo voto era undefined o meno all'interno della funzione voteAndGo utilizzando
   * un return per bloccare l'esecuzione della funzione.
   *
   * const voteAndGo = () => {
   *  if (!value) {
   *    return;
   *  }
   *
   *   vote();
   *   goTo(State.dashboard);
   * };
   *
   *
   */

  // TODO: Allow voting only after selecting a movie
  const voteAndGo = () => {
    if (!(value == "")) {
      console.log("Hai votato");
      vote();
      goTo(State.dashboard);
    }
  };

  return (
    <Box>
      <Title>Qual'è il migliore tra:</Title>
      <RadioGroup onChange={select} value={value}>
        <List>
          {movies.map((movie) => (
            <ListItem py={2} key={movie.id}>
              <Radio value={movie.id}>
                <Heading fontSize="md">{movie.title}</Heading>
                <Box>
                  del {movie.year}, di {movie.author}
                </Box>
              </Radio>
            </ListItem>
          ))}
        </List>
      </RadioGroup>
      <Button onClick={voteAndGo} mt={5}>
        Vota
      </Button>
    </Box>
  );
};
