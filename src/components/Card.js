import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} bg='white' rounded='lg'>
      <Image src={imageSrc} alt={title}  rounded='lg'/>
      <VStack spacing={4} bg='white' p={4} align='left' rounded='lg' >
        <Heading as='h6' size='sm' color='black'>{title}</Heading>
        <Text fontSize='sm' color='grey' >{description}</Text>
        <Text fontSize='sm' color='black'>
          <a href="/">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
