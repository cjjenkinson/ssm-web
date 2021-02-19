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
} from '@chakra-ui/core';

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
              The tool kit for an effective semen retention practice.
            </Heading>

            <Text color="gray.700" mb={4} fontSize="lg">
              The fastest way to a more confident, healthier and conscious life starts with cultivating your sexual energy. 
            </Text>

            <Text color="gray.700" mt={4}>
              I’ve built the tool kit that shows you how to cultivate and refine your life force energy effectively.
            </Text>

            <Text color="gray.700" mt={4}>
              Cultivation - learn how to cultivate more sexual energy through the practice of semen retetion.
            </Text>

            <Text color="gray.700" mt={4}>
              Integration - learn energy practices such as Qi Gong, Breathwork, Meditation, Ejaculation Control needed to refine and transmute energy harmoniously
            </Text>

            <Heading
              letterSpacing="tight"
              mt={4}
              as="h2"
              size="lg"
              fontWeight="bold"
            >
              Includes
            </Heading>

            <Text color="gray.700" mt={4}>
              Everything you need for an effective, lasting semen retention practice. 
            </Text>

            <Text color="gray.700" mt={4}>
              <strong>The (source) Handbook</strong> - A self-paced workshop co-created with world leading sexuality coaches with recorded video/audio integration practices: Qi Gong, breathwork routines and meditations.
            </Text>

            <Text color="gray.700" mt={4}>
              <strong>The (source) Journal</strong> - A daily journalling guide to help you dive deeper into reflecting on your experiences, challenges and changes.
            </Text>

            <Text color="gray.700" mt={4}>
              <strong>iOS and Android app</strong> - A dedicated tracking app to help you get actionable insights about your practice and understand its impact.
            </Text>

            <Text color="gray.700" mt={4}>
              The Self Sourced Man community with bi-weekly live calls will be introduced later this year.
            </Text>

            <Divider borderColor="gray.200" my={8} w="100%" />

            <Heading
              letterSpacing="tight"
              mt={4}
              as="h2"
              size="lg"
              fontWeight="bold"
            >
              The Practice
            </Heading>

            <Text color="gray.700" mt={4}>
              Semen Retention is a centuries-old practice that allows you to harness your body’s vital energy to drive improved mental, physical and energetic well-being.
            </Text>

            <Text color="gray.700" mt={4}>
              The practice itself comes from Taoist and Ayurvedic literature emphasized over and over for its importance in male health and longetivity. 
            </Text>

            <Text color="gray.700" mt={4} fontStyle="italic" fontSize="lg">
              The basic purpose of the practice is to increase as much as possible the quantity of life-giving, 
              age-retarding hormones secreted in a man’s body during sexual excitement, while at 
              the same time decreasing as much as possible the loss of semen and its related hormones through ejaculation. 
              Called huan-jing bu-nau in Chinese (literally ‘return the semen to nourish the brain’), 
              It’s a well-known medical fact that semen and cerebrospinal fluids consist of the same 
              basic ingredients, so preserving semen nourishes the brain by making more essential nutrients available to it.
              Women accomplish this naturally because they retain their sexual secretions during intercourse.

              - Reid, Daniel. The Tao Of Health, Sex And Longevity . 
            </Text>

            <Text color="gray.700" mt={4}>
              With a dedicated practice you will expect to gain these benefits:
            </Text>
          
            <List color="gray.700" spacing={1} mt={4} as="ul" styleType="ordered">
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
                overcome disruptive sexual habits such as porn addiction and habitual masturbation
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
                attract more abundance to your life
              </ListItem>
              <ListItem fontWeight="medium" fontSize="mg">
                activate the great depths of awareness, power, and strength within you
              </ListItem>
            </List>

            <Divider borderColor="gray.200" my={8} w="100%" />

            <Heading
              letterSpacing="tight"
              mt={4}
              as="h2"
              size="md"
              size="lg"
              fontWeight="bold"
            >
              Who is the tool kit created for?
            </Heading>

            <Text color="gray.700" mt={4}>
              The tool kit is created for men who are new to the practice or have struggled in the past to sustain a practice long enough to get lasting benefits. 
            </Text>

            <Text color="gray.700" mt={4}>
              Maybe you: 
            </Text>

            <List color="gray.700" spacing={1} mt={4} as="ul" styleType="ordered">
              <ListItem fontWeight="medium" fontSize="mg">
                heard about semen retention but were unsure where to start
              </ListItem>
              <ListItem fontWeight="medium" fontSize="mg">
                struggled with porn addiction and habitual masturbation
              </ListItem>
              <ListItem fontWeight="medium" fontSize="mg">
                were not sure how to practice it safely
              </ListItem>
              <ListItem fontWeight="medium" fontSize="mg">
                gave up due to lack of willpower or overwhelming emotions 
              </ListItem>
              <ListItem fontWeight="medium" fontSize="mg">
                are feeling uncomfortable about introducing it to your partner
              </ListItem>
              <ListItem fontWeight="medium" fontSize="mg">
                did not want to become a celibate
              </ListItem>
              <ListItem fontWeight="medium" fontSize="mg">
                did not know how to measure and track your progress
              </ListItem>
            </List>

            <Text color="gray.700" mt={4}>
              My aim is to give you the best path forward so that you can master the practice to improve your well-being and unlock more energy to create the life you want. 
            </Text>

            <Text color="gray.700" mt={4}>
              With that in mind the goal is to get you to your first 7, 14 and 30 + days of retention helping you embody the practice with an ejaculation schedule that works for you.
            </Text>

            <Text color="gray.700" mt={4}>
              The tool kit starts with clearing and resetting your mental and physical environment to prepare you for achieving your first week of retention.
            </Text>

            <Text color="gray.700" mt={4}>
              It then goes into the skills needed for long term retention such as ejaculation control, conscious sex and intimacy with retention, break through flatlines and emotional blockages, manage overflowing energy and transmuting energy to fully sustained benefits.
            </Text>

            <Divider borderColor="gray.200" my={8} w="100%" />

            <Heading
              letterSpacing="tight"
              mt={4}
              as="h2"
              size="md"
              size="lg"
              fontWeight="bold"
            >
              Join the waiting list
            </Heading>

            <Text color="gray.700" mt={4}>
              Membership is currently in closed beta. To secure your priority registration for 
              the next membership opportunity, submit your email and I will contact you directly. 
            </Text>
          
            <Subscribe />
          </Flex>
        </Stack>
      </Container>
    </Flex>
  </Box>
);

export default Index;
