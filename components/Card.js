import React from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Image
} from '@chakra-ui/core';

const Card = ({
  heading,
  subHeading,
  summary,
  price,
  buttonText,
  buttonHref
}) => (
  <Box width="100%" border={1} borderColor="gray.200" borderRadius={8}>
    <Flex color="white" direction="column">
      <Box h="164px" bg="green.500">
        <Image
          src="https://via.placeholder.com/400"
          alt="Picture of the author"
          boxSize="200px"
        />
      </Box>
      <Box w="100%" bg="tomato" p={4}>
        <Text 
          fontWeight="bold"
          mt={4}
          mb={4}
        >
          {heading}
        </Text>
        <Text
          fontWeight="regular"
          mt={4}
          mb={4}
        >
          {subHeading}
        </Text>
        <Text
        fontWeight="regular"
          mt={4}
          mb={4}
        >
          {summary}
        </Text>
        {price && (
          <Text
            fontWeight="regular"
            mt={4}
            mb={4}
          >
            ${price} USD
          </Text>
        )}
        {buttonText && (
          <Button>
            {buttonText}
          </Button>
        )}
      </Box>
    </Flex>
  </Box>
)

export default Card;
