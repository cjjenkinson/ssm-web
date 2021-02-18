import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Lato,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Georgia, Lato, -apple-system,BlinkMacSystemFont, Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800
  },
  icons: {
    ...chakraTheme.icons,
  }
};

export default theme;
