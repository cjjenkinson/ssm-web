import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Box, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  z-index: 10;
  top: 0;
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  return (
    <Flex 
      justifyContent="center" 
      flexDirection="column" 
      bg="#23211E" 
      color="#FFF"
    >
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        as="nav"
        p={4}
        mt={[0, 8]}
        mb={4}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Image 
            width="80px"
            objectFit="cover"
            src='https://uploads-ssl.webflow.com/5fe8750bd7bed222c6db0d88/602e62ffd453615c843bd67f_logo.png'
          />
        </NextLink>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box mr={4}>
            <NextLink href="/" passHref>
              Start here
            </NextLink>
          </Box>
          <Box mr={4}>
            <NextLink href="/about" passHref>
              About
            </NextLink>
          </Box>
          <Box mr={4}>
            <NextLink href="/blog" passHref>
              Journal
            </NextLink>
          </Box>
        </Flex>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={'white'}
        color={'black'}
        px={8}
        pt={8}
      >
        {children}
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Container;
