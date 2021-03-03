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
  'Tools to help men master the semen retention lifestyle. Raise your wellbeing standards and create the life you truly desire.';

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
                Unleash your masculine potential
              </Heading>

              <Text mb={4} fontSize="2xl">
                Tools to help you learn and master semen retention.
              </Text>

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Heading
                mt={4}
                mb={4}
                as="h3"
                size="lg"
                fontWeight="bold"
              >
                The fastest way to a more confident, healthier and conscious life starts with cultivating your sexual energy. 
              </Heading> 

              <Text mb={4} fontSize="lg">
                Thanks for arriving at here. It is my belief that you arrived here for a reason. I know your time is valuable so I’m going to explain exactly what this is.
              </Text>

              <Text mb={4} fontSize="lg">
                Self Sourced Man is dedicated to helping men master the practice of semen retention to raise their wellbeing standards and empower them to use their sexual energy as a way to create the life they truly desire. 
              </Text>

              <Text mb={4} fontSize="lg">
                I am commited to making the education, tools and support practical for you so that you can live with more awareness around the relationship between healthy sexuality and improved wellbeing.
              </Text>

              <Text mt={4} fontSize="lg">
                I have built and designed each tool to help you master and deepen different aspects of your practice. Whichever tool you pick, it is my wish that it moves you further faster. Lets stay in touch for updates.
              </Text>

              <Subscribe headline="Subscribe to my weekly newsletter" />

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Heading
                mt={4}
                mb={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                Tools
              </Heading> 

              <SimpleGrid columns={2} spacing={8}>
                <Card 
                  imageSrc="https://via.placeholder.com/400"
                  heading="The (source) Journal"
                  subHeading="Digital Download"
                  summary="Reflect and deepen the understanding of your retention journey."
                  buttonText="Learn More"
                  buttonHref="/tools/journal"
                />

                <Card 
                  imageSrc="https://via.placeholder.com/400"
                  heading="Retain"
                  subHeading="12 Months Access"
                  summary="Track and measure the impact of your practice."
                  subscriptionFrequency="yearly"
                  buttonText="Learn More"
                  buttonHref="/tools/retain"
                />

                <Card 
                  imageSrc="https://via.placeholder.com/400"
                  heading="Becoming Self Sourced"
                  subHeading="Workshop"
                  summary="Learn how to cultivate and use your sexual energy effectively"
                  buttonText="Learn More"
                  buttonHref="/tools/retainrs-handbook-beginners"
                />
              </SimpleGrid>

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Heading
                mt={4}
                mb={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                Free Content
              </Heading> 

              <SimpleGrid columns={2} spacing={8}>
                <Card 
                  imageSrc="https://via.placeholder.com/400"
                  heading="Let's socialise"
                  subHeading="Digital Download"
                  summary="Summary of journal"
                  buttonText="Connect"
                  buttonHref="/connect"
                />

                <Card 
                  imageSrc="https://via.placeholder.com/400"
                  heading="Newsletter"
                  subHeading="Digital Download"
                  summary="Summary of journal"
                  buttonText="Subscribe"
                  buttonHref="/newsletter"
                />
              </SimpleGrid>

            </Flex>
          </Stack>
        </Container>
      </Flex>
    </Box>
  </>
);

export default Index;
