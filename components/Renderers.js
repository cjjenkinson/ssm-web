import {
  Box,
  Callout,
  Code,
  Heading,
  Kbd,
  Link,
  PseudoBox,
  Text,
  Divider,
  useColorMode
} from '@chakra-ui/core';
import { jsx } from '@emotion/core';
import NextLink from 'next/link';

const Table = (props) => (
  <Box overflowX="scroll" w="full">
    <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
  </Box>
);

const THead = (props) => {
  const { colorMode } = useColorMode();
  const bg = {
    light: 'gray.50',
    dark: 'whiteAlpha.100'
  };

  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  );
};

const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)'
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  
  const { value } = props.node.children[0];

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]}>{value}</Link>
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900'
  };

  const { value } = props.node.children[0];

  return (
    <Callout
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
    >
      {value}
    </Callout>
  );
};

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <PseudoBox
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline'
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </PseudoBox>
      )}
    </Box>
  </Heading>
);

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const Renderers = {
  heading: ({ level, node }) => {
    const { value } = node.children[0];

    return <Heading as={`h${level}`} my={4}>{value}</Heading>
  },
  inlineCode: (props) => (
    <Code variantColor="yellow" fontSize="0.84em" {...props} />
  ),
  kbd: Kbd,
  break: (props) => <Box height="24px" {...props} />,
  thematicBreak: Hr,
  table: Table,
  tableHead: THead,
  tableCell: TData,
  link: CustomLink,
  text: (props) => {
    const { value } = props.node.children[0];

    return <Text as="p" mt={4} lineHeight="tall">{value}</Text>
  },
  paragraph: (props) => {
    const { value } = props.node.children[0];

    return <Text as="p" mt={4} fontSize={18} lineHeight="tall">{value}</Text>
  },
  list: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  list: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  listItem: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
};

export { CustomLink };
export default Renderers;
