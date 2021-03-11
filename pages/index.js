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
                The fastest way to a more confident, healthier and conscious life.
              </Text>

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Text mb={4} fontSize="lg">
                Thank you for arriving here. It is my belief that you arrived here for a reason. 
              </Text>

              <Text mb={4} fontSize="lg">
                Self Sourced Man is dedicated to helping men master the semen retention lifestyle and related masculine embodiment work.
              </Text>

              <Text mb={2} fontSize="lg">
                The aim is to help men raise their wellbeing standards and start living life with more energy, confidence and vitality through these practices.
              </Text>

              <Text mb={2} fontSize="lg">
                Here you will find the tools and support to start, deepen and master your practice.
              </Text>

              <Heading
                mt={4}
                mb={2}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                The Community
              </Heading>

              <Text mb={4} fontSize="2xl">
                A private community for men improving their life through the semen retention lifestyle. 
              </Text>

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Text mb={4} fontSize="lg">
                We are a group of brothers cultivating, integrating and embodying together.
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
                ✅ Build better habits by surrounding yourself with dedicated practitioners  <br />
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
                How do I join?
              </Heading> 

              <Text mt={4} fontSize="lg">
                Membership is limited. I limit new Members so I can serve existing Members at the highest level. 
                To secure your priority registration for the next membership opportunity, submit your email and I will contact you directly.
              </Text>

              <Subscribe headline="Join the waitlist to become a member" type="MEMBERSHIP" />

              <Divider borderColor="gray.200" my={8} w="100%" />

              <Heading
                mt={4}
                as="h4"
                size="md"
                fontWeight="bold"
              >
                I am not sure it is for me, why should I join?
              </Heading> 

              <Text mt={4} fontSize="lg">
                I want this to be the safest and best place for you to go deeper into your practice.
              </Text>

              <Text mt={4} fontSize="lg">
                The hardest part about this work is the <strong>doing</strong> part because you will experience problems that you cant break through on your own. 
              </Text>

              <Text mt={4} fontSize="lg">
                Getting help and advice from other men doing this work gives you the best chance to build the right habits and breakthrough struggles with ease.
              </Text>


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
