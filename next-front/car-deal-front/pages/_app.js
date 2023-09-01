import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import "tw-elements/dist/css/tw-elements.min.css";

import { Provider } from "react-redux";
import store from '@/redux/store';

import localFont from 'next/font/local'

import { ApolloProvider } from "@apollo/client";
import client from '@/graphql';
import { AuthProvider } from '../components/layout/auth/authorization';
// import Context from '@/context/context';

import "../styles/globals.css"
import Layout from '../components/layout/Layout';
import Footer from '@/components/layout/nav/footer';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const myFont = localFont({
  src: [
    {
      path: '../public/BYekan/BYekan.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/BYekan/Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})


export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Layout> */}

        {/* <ApolloProvider client={client}> */}
        {/* <Context> */}
        <AuthProvider>
          <Provider store={store}>
            <main className={myFont.className}>
              <Component {...pageProps} />
            </main>
          </Provider>
        </AuthProvider>
        {/* </Context> */}
        {/* </ApolloProvider> */}
        <Footer font={myFont}></Footer>
        {/* </Layout> */}
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};