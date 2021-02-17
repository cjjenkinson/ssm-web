import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import Post from '../components/Post';

import { ContentfulService } from '../services/contentful';

const url = 'https://selfsourcedman.com/blog';
const title = 'Self Sourced Man | Journal';
const description =
  'Learn how to master practices around male sexuality such as semen retention';

const Blog = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const entries = props.entries.length ? props.entries : [];

  const filteredBlogPosts = entries
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((entry) =>
      entry.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              The (source) Journal
            </Heading>
            <Text>
              Learn more about the practice and the journey we are on.
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
              />y
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              All Posts
            </Heading>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((entry) => (
              <Post key={entry.id} {...entry} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  )
};

export const getStaticProps = async ({ query }) => {
  const contentfulService = new ContentfulService();

  const {
    entries,
    total,
  } = await contentfulService.getBlogPostEntries({
    limit: 100
  });

  return { 
    props: { entries, total } 
  };
};


export default Blog;
