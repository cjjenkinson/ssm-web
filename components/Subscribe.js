import React, { useRef, useState } from 'react';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  useToast
} from '@chakra-ui/core';

import { logEvent } from '../utils/google-analytics';

import { useFacebookPixel } from '../utils/FacebookPixel';

const Subscribe = ({ headline }) => {
  const [loading, setLoading] = useState(false);
  const pixel = useFacebookPixel();
  const inputEl = useRef(null);
  const toast = useToast();

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    logEvent('subscribe');
    pixel.track({
      event: 'Lead', 
      data: JSON.stringify({
        content_category: 'Blog Subscriber'
      })
    });
    inputEl.current.value = '';
    toast({
      title: 'Thank you',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box m={8} w="100%" mx="auto" as="form">
      <Heading as="h5" size="xs" mb={1} color="gray.900" fontWeight="medium">
        {headline ? headline : "You must join the list to become a Member."}
      </Heading>
      <InputGroup size="lg" mt={2}>
        <Input
          aria-label="Email for newsletter"
          placeholder="Enter your email"
          ref={inputEl}
          type="email"
          fontSize="md"
        />
        <InputRightElement width="8rem">
          <Button
            isLoading={loading}
            fontWeight="bold"
            h="2.5rem"
            mr={1}
            size="md"
            onClick={subscribe}
            bg="gray.800"
            color="white"
            _hover={{ bg: 'black' }}
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Subscribe;
