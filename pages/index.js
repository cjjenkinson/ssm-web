import React from 'react';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  List,
  ListItem,
  Divider,
  Link,
} from '@chakra-ui/core';
import Image from 'next/image'

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const Index = () => (
  <Box as="main">
    <Flex justifyContent="center" flexDirection="column" bg="#23211E" color="#FFF">
      <Container>
        <Stack
          as="section"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m={['0 auto', null, '0 auto 4rem auto']}
          maxWidth="600px"
          p={8}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="600px"
          >
            <Heading
              mb={4}
              as="h1"
              size="2xl"
              fontWeight="bold"
            >
              Master semen retention, unlock a new you.
            </Heading>

            <Text mb={4} fontSize="xl">
              The fastest way to a more confident, healthier and conscious life starts with cultivating your sexual energy. 
            </Text>

            <Divider borderColor="gray.200" my={8} w="100%" />

            <Heading
              mt={4}
              mb={4}
              as="h4"
              size="md"
              fontWeight="bold"
            >
            Thanks for arriving at Self Sourced Man. It is my belief that you arrived here for a reason.
            </Heading> 

            <Text mb={4} fontSize="lg">
              I know your time is valuable so I’m going to explain exactly what this is.
            </Text>

            <Text mb={4} fontSize="lg">
              Self Sourced Man is dedicated to helping men master the semen retention lifestyle.
            </Text>

            <Text mb={4} fontSize="lg">
              I am commited to helping men raise their wellbeing standards and use their sexual energy as a way to create the life they truly desire.
            </Text>

            <Text mt={4} fontSize="lg">
              Right now I answer questions on the most common issues and share insights from my research about the practice.
            </Text>

            <Text mt={4} fontSize="lg">
              Alongside this I am working on a dedicated tracking app, Retain that helps you easily track and measure your practice. It prompts you daily for a check in that will help you collect the data to give you actionable insights about the impact of your practice on your wellbeing. 
            </Text>

            <Heading
              letterSpacing="tight"
              mt={8}
              as="h2"
              size="md"
              size="lg"
              fontWeight="bold"
            >
              Subscribe to the newsletter
            </Heading>

            <Text mt={4}>
              Each week I share my answers to questions and new insights about mastering the Semen Retention lifestyle. 
            </Text>
          
            <Subscribe />

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
);

export default Index;
