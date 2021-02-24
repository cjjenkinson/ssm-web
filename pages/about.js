import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Image
} from '@chakra-ui/core';

import Container from '../components/Container';

const url = 'https://selfsourcedman.com/about';
const title = 'Self Sourced Man | About';
const description =
  'Self Sourced Man is a self-development platform dedicated to driving improved mental, physical and energetic well-being for men.';

const About = () => {
  return (
    <>
      <NextSeo
        title={title}
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
              About 
            </Heading>

            <Image 
              src="https://uploads-ssl.webflow.com/5fe8750bd7bed222c6db0d88/60280710cd0d33daa39b8779_selfsourcedman-hero-bg.png" 
              alt="Self Sourced Man" 
              mb={8}
            />

            <Text mb={4}>
              Self Sourced Man is a self-development platform dedicated to driving improved mental, physical and energetic well-being for men.
            </Text>

            <Text mb={4}>
              Living life from a sustainable source of energy, confidence and vitality is the core principle of living as a Self Sourced Man.
            </Text>

            <Text mb={4}>
              I am commited to helping men raise their wellbeing standards and getting them connected to their sexual energy as a foundation to live from.
            </Text>

            <Text mb={4}>
              I want all men to reprogram their disruptive sexual habits and ineffective sexual beliefs that has eroded their ability to relate to the world preventing them from having the relationships and life they truly desire.
            </Text>

            <Text mb={4}>
              - Cameron Jenkinson
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
