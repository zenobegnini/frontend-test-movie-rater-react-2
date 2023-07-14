import { Box } from "@chakra-ui/react";

import React from "react";
import { Title } from "./layout/Title";
import { WarningIcon } from "@chakra-ui/icons";






export const Error: React.FC = () => {

    return (
        <Box style={{textAlign:"center"}}>
            <WarningIcon w={8} h={8} color="black" />
          <Box>Ops! si è verificato un errore</Box>

        </Box>
      );
    


};