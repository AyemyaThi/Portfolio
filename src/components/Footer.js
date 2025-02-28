import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import { usePortfolio } from "../hooks/usePortfolio"; // Import the hook and provider

const Footer = () => {
  const { name, year } = usePortfolio();

  return (
    <Box backgroundColor="#092d4d">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>{name} • © {year}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
