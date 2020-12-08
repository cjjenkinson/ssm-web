import React from 'react';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  Link,
  Icon,
  Avatar,
  Badge,
  AspectRatioBox
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const trackGoal = (id) => {
  if (window.fathom) {
    window.fathom.trackGoal(id, 0);
  }
};

const Index = () => (
  <Box as="main">
    <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
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
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="2xl"
              fontWeight="bold"
            >
              Raise your
              <Box>
                <Box display="inline" backgroundColor="#ffc500">
                  wellbeing standards.
                </Box>
              </Box>
            </Heading>
            <Text color="gray.700" mb={4} fontSize="lg">
              A new platform designed to help conscious men master their sexual, body and mental health. Live from source.
            </Text>
            <Subscribe />
          </Flex>
        </Stack>
      </Container>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="600px"
        mt={[4, 8, 16]}
        p={8}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="600px"
        >
          <Heading
            letterSpacing="tight"
            mt={4}
            as="h2"
            size="lg"
            fontWeight="bold"
          >
            Vision
          </Heading>
          <Text color="gray.700" mt={4}>
            Our vision is to provide men with a space that will revolutionise their sexual health and wellbeing through instruction, tools and community. 
          </Text>
          <Text color="gray.700" mt={4}>
            We aim:
          </Text>
          <Text color="gray.700" mt={4}>
            To educate men and give them the support in creating healthy habits and practices around their sexuality, body and mind. 
          </Text>
          <Text color="gray.700" mt={4}>
            To create a masculine culture that supports the full authentic expression of men.   
          </Text>
          <Text color="gray.700" mt={4}>
            To build a community platform that will help men be of service, become self sourced, self satisfied and activate their inner power.   
          </Text>
          <Text color="gray.700" mt={4}>
            To provide tools that will help men break through sexual shame, guilt, self judgement and self sabotaging habits to live with
            more a disciplined, masterful and purposeful life.
          </Text>
          <List spacing={2} mt={8} as="ol" styleType="decimal">
            <ListItem fontWeight="medium" fontSize="mg">
              To reprogram disruptive sexual habits, ineffective sexual beliefs and social conditioning that may erode a man’s ability to relate to the world.
            </ListItem>
            <ListItem fontWeight="medium" fontSize="mg">
              So men can feel more confident, grounded, present, expressive, viril, satisfied, powerful and connected.
            </ListItem>
            <ListItem fontWeight="medium" fontSize="mg">
              When a man becomes self sourced he is able to fill his own container which he can then share in service to the world.
            </ListItem>
          </List>
          <Text color="gray.700" mt={16} fontStyle="italic" fontSize="lg">
            "The cornerstone of sexual mastery is being present in your 
            body and feeling what is happening right here/right now instead of 
            being in your head with your formulas and notions." –– Greg Paul
          </Text>
          <Divider borderColor="gray.200" my={16} w="100%" />

          <Subscribe />
          
        </Flex>
      </Stack>
    </Flex>
  </Box>
);

export default Index;
