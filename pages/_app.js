import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import {
  ThemeProvider,
  CSSReset,
} from '@chakra-ui/core';
import Router from 'next/router';
import Head from 'next/head';

import theme from '../styles/theme';
import SEO from '../next-seo.config';

import { initGA, logPageView } from '../utils/google-analytics';
import { FacebookPixel } from '../utils/FacebookPixel';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ::selection {
          background-color: #47a3f3;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: white;
        }
      `}
    />
    {children}
  </>
);

Router.events.on('routeChangeComplete', () => {
  logPageView()
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initGA()
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            content="width=device-width, initial-scale=1"
            name="viewport"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="314dc0f5de2af07d" name="yandex-verification" />
          <meta
            content="1VaKjlfoL0fRNpLaUtB45MnXPwVY6eAEYCtd6O1m8ZY"
            name="google-site-verification"
          />
        </Head>
        <FacebookPixel />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </GlobalStyle>
    </ThemeProvider>
  );
};

export default App;
