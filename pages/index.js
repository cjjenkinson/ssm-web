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
              Raise your wellbeing standards
            </Heading>

            <Text mb={4} fontSize="xl">
              Dedicated to driving improved mental, physical and energetic well-being for men.
            </Text>

            <Divider borderColor="gray.200" my={8} w="100%" />

            <Box>
              <Image 
                src='/static/images/rtbg.png'
                alt="Retainers Tool Kit"
                width={600}
                height={300}
              />
            </Box>

            <Heading
              letterSpacing="tight"
              mt={4}
              as="h2"
              size="md"
              size="xl"
              fontWeight="bold"
            >
              Retainers tool kit
            </Heading>

            <Heading
              mt={4}
              mb={4}
              as="h4"
              size="md"
              fontWeight="bold"
            >
              The fastest way to a more confident, healthier and conscious life starts with cultivating your sexual energy. 
            </Heading>

            <Text mt={4} fontSize="lg">
              Have you heard about <Link href="#semen-retention" textDecoration="underline">semen retention</Link> but were unsure where to start?
            </Text>

            <Text mt={4} fontSize="lg">
              Have you struggled to break past a few days to feel real benefits?
            </Text>

            <Text mt={4} fontSize="lg">
              The Ratainers tool kit has everything you need for an effective, lasting semen retention practice. 
            </Text>

            <Text mt={4} fontSize="lg">
              Includes:
            </Text>

            <Text mt={4} fontSize="lg">
              - A self-paced workshop co-created with a world leading mens sexuality coach to teach you how to master semen retention. Includes recorded video/audio integration routines covering Qi Gong, breathwork and meditation.
            </Text>

            <Text mt={4} fontSize="lg">
              - A copy of The (Source) Journal - A daily journalling guide to help you dive deeper into reflecting on your experiences, challenges and changes. 
            </Text>

            <Text mt={4} fontSize="lg">
              - 12 months access to the Self Sourced iOS and Android app - A dedicated tracking app to easily track and measure your practice to help you get actionable insights to understand its impact. 
            </Text>

            <Text mt={4} fontSize="lg">
              I created this tool kit so that you can put your best foot forward with this practice.
            </Text>

            <Text mt={4} fontSize="lg">
              Cultivating and using your sexual energy is a powerful way of improving your well-being and creating more of what you want in your life. 
            </Text>

            <Text mt={4} fontSize="lg">
              Less than 1% of men in the world use this approach to personal mastery. Why? because it is hard. It goes against our instinct and everything we have been conditioned to believe about sexuality.
            </Text>

            <Text mt={4} fontSize="lg">
              But I know and you know that the practice makes sense to you. Something inside of you know it feels right and the timing behind why you are being called to start this journey is why you found this tool kit. I believe it. 
            </Text>

            <Text mt={4} fontSize="lg">
              If you are new to semen retention or have struggled to sustain a practice in the past then I have created this tool kit for you. 
            </Text>

            <Text mt={4} fontSize="lg">
              However I only invite you to use it if you are serious about mastering this practice. 
            </Text>

            <Text mt={4} fontSize="lg">
              How would you feel if you could easily cultivate your sexual energy for days, weeks or months at a time?
            </Text>

            <Text mt={4} fontSize="lg">
              What would your life look like if you could finally show up with the confidence, presence and energy you are cutting yourself off from every day?
            </Text>

            <Text mt={4} fontSize="lg">
              Are you ready to start committing to a journey of unlocking a new, healthier and more confident you?
            </Text>

            <Heading
              letterSpacing="tight"
              mt={8}
              as="h2"
              size="md"
              size="lg"
              fontWeight="bold"
            >
              Join the waiting list
            </Heading>

            <Text mt={4}>
              Membership is currently invite only. This is because I am serving current members individually
              to make sure they are served to the highest degree. To secure your priority registration 
              for the next membership opportunity, submit your email and I will contact you directly.
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
