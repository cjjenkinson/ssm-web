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
    <Flex justifyContent="center" flexDirection="column" bg="#fff8ee">
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
             The tool kit for an
              <Box>
                <Box display="inline" backgroundColor="#0F1B26" color="#fff" p={1}>
                  effective semen retention practice.
                </Box>
              </Box>
            </Heading>
            <Text color="gray.700" mb={4} fontSize="lg">
              Master your sexual energy, unlock a new you.
            </Text>

            <Heading
              letterSpacing="tight"
              mt={4}
              as="h2"
              size="lg"
              fontWeight="bold"
            >
              Living from source
            </Heading>
            <Text color="gray.700" mt={4}>
              The fastest way to a more confident, healthier and conscious life starts with cultivating your sexual energy. 
              Self Sourced man is the owner’s manual and tool kit for cultivating and using it effectively.
            </Text>

            <Text color="gray.700" mt={4}>
              Semen Retention is a centuries-old practice that allows you to harness your body’s vital energy and redirect it to 
              raise your wellbeing standards, unlock more energy and design the life you want to live.
            </Text>

            <Text color="gray.700" mt={4}>
              My aim is to give you the tools, space and community to teach you how to cultivate, refine and use your sexual energy effectively. 
            </Text>

            <Text color="gray.700" mt={4}>
              Here are the benefits you will expect to gain from the practice:
            </Text>
            
            <List spacing={2} mt={8} as="ul" styleType="ordered">
              <ListItem fontWeight="medium" fontSize="mg">
                overcome toxic sexual habits such as porn addiction and habitual masturbation
              </ListItem>
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
                high functionality of body and mind
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
              The Tool Kit
            </Heading>
    
            <Text color="gray.700" mt={4}>
              Self Sourced Man is a continuous workshop. That means you dive in and work at your own pace. There are no tests, no competitions, no certificates. 
            </Text>

            <Text color="gray.700" mt={4}>
              We give you the instruction, tools and support for you to own your journey in learning the practice.
            </Text>

            <Text color="gray.700" mt={4}>
            <strong>The (source) Manual</strong> - Structured learning paths co-created with world leading sexuality coaches to help you master semen retention and related skills such as energy work (Qi Gong, Breathwork, Meditation). New learning paths will be introduced throughout the year.
           </Text>

           <Text color="gray.700" mt={4}>
            <strong>iOS and Android app</strong> - A dedicated tracking app to help you get actionable insights about your practice and understand its impact.
           </Text>

           <Text color="gray.700" mt={4}>
            <strong>Community</strong> - Meet, contribute and grow with other men on the same journey as you. By surrounding yourself with progress, you will stay motivated.
           </Text>

           <Text color="gray.700" mt={4}>
             <strong>Live Circle Calls</strong> - A monthly virtual call with fellow members to discuss challenges and share experiences. Exclusive guests will be invited throughout the year to introduce new techniques and learnings.
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
              Membership Information
            </Heading>

            <Text color="gray.700" mt={4}>
              Our members value masculinity, sacred sexuality, and brotherhood. 
            </Text>

            <Text color="gray.700" mt={4}>
              Membership is currently in beta and new Members are limited so that existing Members can be served at the highest level. 
              To secure your priority registration for the next membership opportunity, submit your email and I will contact you directly. 
            </Text>
  
            <Subscribe />
          </Flex>
        </Stack>
      </Container>
    </Flex>
  </Box>
);

export default Index;
