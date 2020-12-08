import React from 'react';
import NextLink from 'next/link';
import { Flex, Box, Heading } from '@chakra-ui/core';

const Container = ({ children }) => (
  <>
    <Box bg="#FBFBFB">
      <Box
        background="linear-gradient(to right, #c21500, #ffc500)"
        w="full"
        h="15px"
      />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 0, 8]}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Box as="a">
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="xl"
              fontWeight="bold"
            >
              SSM
            </Heading>
          </Box>
        </NextLink>
      </Flex>
    </Box>
    {children}
  </>
);

export default Container;
