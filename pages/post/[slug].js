import React from 'react';
import ReactMarkdown from 'react-markdown';
// import IframeResizer from 'iframe-resizer-react';
import { parseISO, format } from 'date-fns';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Box
} from '@chakra-ui/core';

import Container from '../../components/Container';
import Subscribe from '../../components/Subscribe';
import PostSeo from '../../components/PostSEO';

import { ContentfulService } from '../../services/contentful';

const Post = ({ article, tags, suggestedArticles }) => {

  return (
    <Container>
      <PostSeo url={`https://selfsourcedman.com/post/${article.slug}`} {...article} />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {article.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name={article.author.name}
                src={article.author.profilePhoto.url}
                mr={2}
              />
              <Text fontSize="sm">
                {article.author.name}
                {' / '}
                {format(parseISO(article.publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box>
          <ReactMarkdown className="markdown" source={article.body} />
          <Subscribe headline="Subscribe for future posts:" />
        </Box>
      </Stack>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const contentfulService = new ContentfulService();

  const { slug } = params;
  
  const article = await contentfulService.getPostBySlug(slug);

  const tags = article.tags ? article.tags.map((tag) => tag.sys.id) : [];

  const suggestedArticles = await contentfulService.fetchSuggestions(
    tags,
    article.slug
  );

  return { 
    props: { 
      article, 
      tags,
      suggestedArticles 
    }
  };
};

export async function getStaticPaths () {
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
};

export default Post;