import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Divider,
  List,
  ListItem,
  Image
} from '@chakra-ui/core';

import Container from '../components/Container';

const url = 'https://selfsourcedman.com/about';
const title = 'Self Sourced Man | About';
const description =
  'Self Sourced Man is dedicated to driving improved mental, physical and energetic well-being for men.';

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
    </>
  );
};

export default About;
