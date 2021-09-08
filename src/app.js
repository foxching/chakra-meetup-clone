import React from "react";
import { ChakraProvider, Box, Image } from "@chakra-ui/react";
import Banner from "./components/Banner";
import ItWorks from "./components/ItWorks";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import Connected from "./components/Connected";
import Stories from "./components/Stories";
import FooterBottom from "./components/FooterBottom";
import imageBg from "./assets/bg.svg";

export default function App() {
  return (
    <ChakraProvider>
      <Box position="absolute" left="0" top="0" right="0">
        <Banner />
        <ItWorks />
        <Upcoming />
        <Popular />
        <Connected />
        <Stories />
        <FooterBottom />
      </Box>
      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    </ChakraProvider>
  );
}
