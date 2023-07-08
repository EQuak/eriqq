import * as React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import '../public/styles.css';
import { NextRouter, useRouter } from 'next/router';
import { AppFooter, AppHeader } from '../components';
import { globalStyles } from '../styles/GlobalStyles';

globalStyles();

const CustomComponent = ({
  Component,
  pageProps,
  router,
}: {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
  router: NextRouter;
}) => {
  return <Component {...pageProps} />;
};

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const title = 'eriqq';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={title} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <style type="text/css"></style>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppHeader />
      <main>
        <CustomComponent
          Component={Component}
          pageProps={pageProps}
          router={router}
        />
      </main>
      <AppFooter />
    </>
  );
}

export default CustomApp;
