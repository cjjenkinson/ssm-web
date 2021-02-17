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
  'The tool kit for an effective semen retention practice. Raise your wellbeing standards, unlock more energy and design the life you want to live.';

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
              A Self Sourced Man is able to fill his own container which he then uses to be in service to the world.   
            </Text>
            <Text mb={4}>
              We focus on tools that help men master their sexual energy as we believe this is the foundation for building a solid container. 
              With this foundation in place it is much easier to create a space for living life from a sustainable source of energy, 
              confidence and vitality.
            </Text>
            <Text mb={4}>
              If we can reprogram disruptive sexual habits, ineffective sexual beliefs and social 
              conditioning that may erode a man’s ability to relate to the world we are fulfilling our mission of 
              creating more Self Sourced Men. 
            </Text>
            <Text mb={4}>
              We hope you answer the call to living a life from your own source.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
