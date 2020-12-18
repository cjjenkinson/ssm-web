import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://instagram.com/selfsourced" title="Instagram" isExternal>
        <IconButton
          aria-label="Instagram"
          icon="instagram"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw"
        title="YouTube"
        isExternal
      >
        <IconButton
          aria-label="YouTube"
          icon="youtube"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:hello@selfsourcedman.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <div>
      <NextLink href="/about" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Subscribe"
        >
          /about
        </Link>
      </NextLink>
      <NextLink href="/blog" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Blog"
        >
          /blog
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;
