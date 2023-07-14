import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, ListIcon, ListItem, OrderedList, Progress } from "@chakra-ui/react";
import React from "react";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { Title } from "../layout/Title";
import { IRatedMovie } from "../../lib/globalState/selectors/useAllMovies";

export const TopTen: React.FC = () => {
  const movies: IRatedMovie[] = useTopTenMovies();
  console.log(movies);
  return (
    <Box>
      <Title>Top ten</Title>
      <div style={{WebkitMaskImage: "linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)", maskImage: "linear-gradient(rgba(0, 0, 0, 0.9) 70%, rgba(0, 0, 0, 0) 100%)", paddingLeft:"8px"}}>
      <OrderedList >
        {movies.map((movie) => (
          <ListItem key={movie.id} style={{margin:"0px"}}>
            <span style={{alignItems:"center", display:"flex"}}>
            <Progress value={movie.votes} colorScheme="pink" style={{width: "10%", margin:"3px", display:"inline-block", height:"8px"}}/>
            {movie.title} ({movie.votes} voti)</span>
          </ListItem>
        ))}
      </OrderedList>
      </div>
    </Box>
  );
};
