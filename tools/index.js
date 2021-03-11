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

import Container from '../../components/Container';
import Subscribe from '../../components/Subscribe';

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
              Tools
            </Heading>

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
              The Retainers tool kit is coming soon. Let me know you are interested by joining the waiting list
            </Heading>

            <Subscribe />
          </Flex>
        </Stack>
      </Container>
    </Flex>
  </Box>
);

export default Index;
