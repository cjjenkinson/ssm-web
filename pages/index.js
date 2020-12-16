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
    <Flex justifyContent="center" flexDirection="column" bg="#f3ece2">
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
              We help conscious men master their sexual fitness enabling them to live with more confidence, creativity and vitality. 
            </Text>
            <Subscribe />
          
          </Flex>
        </Stack>
      </Container>
    </Flex>
  </Box>
);

export default Index;
