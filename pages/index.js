import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  Divider,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/core';

import Card from '../components/Card';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const url = 'https://selfsourcedman.com';
const title = 'Self Sourced Man';
const description =
  'Tools to help you master the semen retention lifestyle. Raise your wellbeing standards and create the life you truly desire.';

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
                Master semen retention, unlock a new you.
              </Heading>

              <Text mb={4} fontSize="2xl">
                Cultivate | Integrate | Embody
              </Text>

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Text mb={4} fontSize="lg">
                Thank you for arriving here. It is my belief that you arrived here for a reason. 
              </Text>

              <Text mb={4} fontSize="lg">
                Self Sourced Man is dedicated to helping men master the semen retention lifestyle and related masculine embodiment work.
              </Text>

              <Text mb={2} fontSize="lg">
                I am commited to helping men raise their wellbeing standards and use their sexual energy as a way to create the life they truly desire.
              </Text>

              <Text mb={2} fontSize="lg">
                Here you will find the tools, instruction and support needed to start, deepen and master your semen retention practice.
              </Text>

              <Text mb={4} fontSize="lg">
                I am commited to making the education, tools and support practical for you so that you can easily start living life with more energy, confidence and vitality.
              </Text>

              <Text mt={4} fontSize="lg">
                I have built and designed each tool to help you master and deepen different aspects of your practice. Whichever tool you pick, it is my wish that it moves you further faster.
              </Text>

              <Text mt={4} fontSize="lg">
                Already praciticing? Join the <Link href="/community">community for practitioners today</Link>
              </Text>

              <Subscribe headline="Lets stay in touch for updates" />

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Heading
                letterSpacing="tight"
                mt={4}
                as="h2"
                size="md"
                size="lg"
                fontWeight="bold"
                id='semen-retention'
              >
                What is Semen Retention?
              </Heading>

              <Text mt={4} fontSize="lg">
                Good question. Semen Retention is a centuries-old practice that allows you to harness your body’s vital energy to drive improved mental, physical and energetic well-being.
              </Text>

              <Text mt={4} fontStyle="italic" fontSize="lg">
                The basic purpose of the practice is to increase as much as possible the quantity of life-giving, 
                age-retarding hormones secreted in a man’s body during sexual excitement, while at 
                the same time decreasing as much as possible the loss of semen and its related hormones through ejaculation. 

                - Reid, Daniel. The Tao Of Health, Sex And Longevity . 
              </Text>

              <Text mt={4} fontSize="lg">
                With a dedicated practice you will expect to gain these benefits:
              </Text>
            
              <List spacing={1} mt={4} as="ul" styleType="ordered">
                <ListItem fontWeight="medium" fontSize="mg">
                  strong confidence and presence
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  more power and productivity
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  more direction and purpose
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  overcome disruptive sexual habits such as porn addiction and habitual masturbation with ease
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  better connection with women and more sexual confidence
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  a deeper sense of love, acceptance and worthiness
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  be able to feel and clearly express your feelings
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  clarity around your self, strength and weaknesses
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  increased energy to approach life with greater power and strength
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  high functionality of body, mind and wellbeing
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  shift your attention from compulsive thinking and worrying to resting in the simple awareness of presence
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  manifest and attract more abundance to your life
                </ListItem>
                <ListItem fontWeight="medium" fontSize="mg">
                  activate the great depths of awareness, power, and strength within you
                </ListItem>
              </List>
            </Flex>
          </Stack>
        </Container>
      </Flex>
    </Box>
  </>
);

export default Index;
