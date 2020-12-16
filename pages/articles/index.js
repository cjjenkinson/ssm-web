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

import Container from '../../components/Container';
import Post from '../../components/Post';

import { ContentfulService } from '../../services/contentful';

const url = 'https://selfsourcedman.com/articles';
const title = 'Articles – Self Sourced Man';
const description =
  'XXX.';

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
              Articles
            </Heading>
            <Text>
              {`We write articles around the practices, results and research from the community.`}
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

  const { tags } = await contentfulService.getAllTags();

  return { 
    props: { tags, entries, total } 
  };
};

export const getStaticPaths = async () => {
  const contentfulService = new ContentfulService();

  const {
    entries,
  } = await contentfulService.getBlogPostEntries({
    limit: 100
  });

  const paths = entries.map(({ slug }) => ({ params: { slug } }));

  return { 
    paths, 
    fallback: false 
  };
}

export default Blog;
