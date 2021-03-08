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
  'Self Sourced Man is community for men practicing sexual self mastery through techniques like semen retention, sacred sexuality and energy work.';

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
            maxWidth="640px"
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
                Unleash your masculine potential
              </Heading>

              <Text mb={4} fontSize="2xl">
                We are a group of brothers cultivating, harnessing and embodying together.
              </Text>

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Heading
                mt={4}
                mb={4}
                as="h3"
                size="lg"
                fontWeight="bold"
              >
                The fastest way to a more confident, healthier and conscious life starts with cultivating your sexual energy
              </Heading> 

              <Text mb={4} fontSize="lg">
                Thanks for arriving at here. It is my belief that you arrived here for a reason. I know your time is valuable so I’m going to explain exactly what this is.
              </Text>

              <Text mb={4} fontSize="lg">
                Self Sourced Man is community for men practicing sexual self mastery through techniques like semen retention, sacred sexuality and energy work.
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
                ✅ Get support & advice from brothers with their own unique insights and experiences  <br />
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
                I want this to be the best place for you to learn and take the right steps into this work.
                Learning the techniques is one of the easier aspects of the practice where it can be picked up from books.
              </Text>
              
              <Text mt={4} fontSize="lg">
                The hardest part about this work is the <strong>doing</strong> part. When you start actually doing it you will experience problems 
                that you require support and advice to work through. Getting help from other men doing this work gives you the best chance 
                to succesfully continue this work long term. I also believe that there is nothing more impactful than a structured accountability
                system for building new habits.
              </Text>

              <Heading
                mt={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                How do I join?
              </Heading> 
              
              <Heading
                mt={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                How do I join?
              </Heading> 

              <Text mt={4} fontSize="lg">
                Membership is free and is within a group on Telegram. I limit new Members so I can serve existing Members at the highest level. 
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
