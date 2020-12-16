import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';

const url = 'https://selfsourcedman.com/about';
const title = 'About – Self Sourced Man';

const About = () => {
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
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
              About 
            </Heading>
            <Text mb={4}>
              Raise your wellbeing standards and enhance the quality of your life.
            </Text>
            <Text mb={4}>
              We help men master their sexual fitness and improve their wellbeing helping them become more confidence, creative and aligned.
            </Text>
            <Text mb={4}>
              **Join a commitment to becoming the best man you can become.**
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
