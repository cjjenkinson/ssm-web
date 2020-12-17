import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://github.com/leerob" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
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
      <Link href="mailto:me@leerob.io" title="Email" isExternal>
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
      <NextLink href="/newsletter" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Newsletter"
        >
          /newsletter
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;
