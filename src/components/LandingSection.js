import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { usePortfolio } from "../hooks/usePortfolio"; // Import the hook and provider

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const { name, avatar_url, occupation, specialization } = usePortfolio();

  //const greeting = `Hello, I am ${name}!`;
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <Avatar name='Aye Mya' src={avatar_url} />
      <Heading as='h6' size='xs'>Hello, I am {name}</Heading>
      <Heading as='h4'>{occupation}</Heading>
      <Heading as='h4'>{specialization}</Heading>
    </FullScreenSection>
  )
};

export default LandingSection;
