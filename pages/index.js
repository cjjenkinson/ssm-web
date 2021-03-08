import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  Divider,
  SimpleGrid,
} from '@chakra-ui/core';

import Card from '../components/Card';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const url = 'https://selfsourcedman.com';
const title = 'Self Sourced Man';
const description =
  'Self Sourced Man is a private community for men improving their life through semen retention and related practices around sexual self mastery.';

const Index = () => (
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
    <Box as="main">
      <Flex justifyContent="center" flexDirection="column" bg="#23211E" color="#FFF">
        <Container>
          <Stack
            as="section"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m={['0 auto', null, '0 auto 4rem auto']}
            maxWidth="700px"
            p={8}
          >
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
            >
              <Heading
                mb={4}
                as="h1"
                size="2xl"
                fontWeight="bold"
              >
                Self Sourced Man
              </Heading>

              <Text mb={4} fontSize="2xl">
              Self Sourced Man is a private community for men improving their life through semen retention and related practices around sexual self mastery.
              </Text>

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Text mb={4} fontSize="lg">
                We are a group of brothers cultivating, harnessing and embodying together.
              </Text>

              <Text mb={4} fontSize="lg">
                At some point, all of us practicing semen retention struggle with the following:
              </Text>

              <Text mb={2} fontSize="lg">
                1. Keeping motivation up & feeling isolated
              </Text>

              <Text mb={2} fontSize="lg">
                2. Getting support for when things get difficult
              </Text>

              <Text mb={2} fontSize="lg">
                2. Going further with our practice to get more from it
              </Text>

              <Heading
                mt={4}
                mb={2}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                Being a part of the community will help you: 
              </Heading>

              <Text mb={4} fontSize="lg">
                ✅ Build better habits by surrounding yourself with men practicing the work daily  <br />
                ✅ Stay accountable by publicly sharing your progress  <br />
                ✅ Get support & advice from members with their own unique insights and experiences  <br />
              </Text>

              <Heading
                mt={4}
                mb={2}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                How to get the most out of the membership
              </Heading>

              <Text mb={4} fontSize="lg">
                - Be consistent: Complete a daily check in before the end of the day  <br />
                - Be seen: Ask questions and share insights to open up discussions  <br />
                - Be supportive: Connect and bond with brothers on our monthly circle calls  <br />
              </Text>

              <Heading
                mt={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                What is the daily check in? 
              </Heading>

              <Text mt={4} fontSize="lg">
                The daily check in is a two step question
              </Text>

              <Text mt={4} fontSize="lg">
                1. Whether you cultivated or had a release (ejaculation). <br />
                2. Your current state of being for the day (grounded, happy, depleted etc) 
              </Text>
              
              <Text mt={4} fontSize="lg">
                A check in message looks like this:
              </Text>
              
              <Text mt={4} fontSize="lg">
                🔮 grounded, present, strong 
              </Text>
              
              <Text mt={4} fontSize="lg">
                I’ve found the daily check in is a great tool to measure progress but even better within a group setting. 
              </Text>
              
              <Text mt={4} fontSize="lg">
                It helps you build better habits and creates opportunities for brothers to provide support for your off days. 
              </Text>
              
              <Text mt={4} fontSize="lg">
                This support can help dive deeper into how you are feeling that you would not be able to reach on your own. 
              </Text>

              <Heading
                mt={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                I am new to all of this work, why should I join?
              </Heading> 

              <Text mt={4} fontSize="lg">
                I want this to be the safest and best place for you to learn to take the right steps into this work.
              </Text>

              <Text mt={4} fontSize="lg">
                Learning the techniques is one of the easier aspects of the practice where it can be picked up from books. (I can send you the right material)
              </Text>
              
              <Text mt={4} fontSize="lg">
                The hardest part about this work is the <strong>doing</strong> part. You will experience problems that require support and advice to work through. 
              </Text>

              <Text mt={4} fontSize="lg">
                Getting help from other men doing this work gives you the best chance to build the right habits within a supportive community.
              </Text>

              <Heading
                mt={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                How do I join?
              </Heading> 

              <Text mt={4} fontSize="lg">
                Membership is free whilst it is in beta. I limit new Members so I can serve existing Members at the highest level. 
                To secure your priority registration for the next membership opportunity, submit your email and I will contact you directly.
              </Text>

              <Subscribe headline="Join the waitlist to become a member" type="MEMBERSHIP" />
            </Flex>
          </Stack>
        </Container>
      </Flex>
    </Box>
  </>
);

export default Index;
