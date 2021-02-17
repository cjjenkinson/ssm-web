import React from 'react';
import NextLink from 'next/link';
import { Heading, Button, Flex, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  z-index: 10;
  top: 0;
  transition: background-color 0.1 ease-in-out;
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
`;

const Container = ({ children }) => {
  return (
    <>
      <Box
        background="linear-gradient(to right, #c21500, #ffc500)"
        w="full"
        h="8px"
      />
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Heading
            letterSpacing="tight"
            as="h1"
            size="xl"
            fontWeight="bold"
          >
            SSM
          </Heading>
        </NextLink>
        <Box>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Journal
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Start here
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={'white'}
        color={'black'}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
