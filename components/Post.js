import React from 'react';
import NextLink from 'next/link';
import { Heading, Text, Flex, Box, Link } from '@chakra-ui/core';

const Post = ({
  title,
  slug,
  description
}) => {
  return (
    <NextLink href={`post/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
          </Flex>
          <Text>{description}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default Post;

