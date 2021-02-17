import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <NextLink href="https://www.youtube.com/channel/UC7zYDihxb-Nlu9lOgMEJhjA" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="YouTube"
        >
          /youtube
        </Link>
      </NextLink>
      <NextLink href="/https://instagram.com/selfsourced" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Instagram"
        >
          /instagram
        </Link>
      </NextLink>
      <NextLink href="mailto:cameron@selfsourcedman.com" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Email"
        >
          /email
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;
