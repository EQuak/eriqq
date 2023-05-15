import * as React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import '../public/styles.css';
import { NextRouter, useRouter } from 'next/router';
import { AppFooter, AppHeader } from '../components';
import { globalStyles } from '../styles/GlobalStyles';
import { styled } from '../stitches.config';
import { ScrollUpIcon } from '../components/icons';

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
  const title = 'melmac';
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  // React.useEffect(() => {
  //   if (typeof window === 'undefined') {
  //     /* we're on the server */
  //   }
  //   const handleScrollButtonVisibility = () => {
  //     window.pageYOffset > 10
  //       ? setShowScrollButton(true)
  //       : setShowScrollButton(false);
  //   };
  //   window.addEventListener('scroll', handleScrollButtonVisibility);
  //   return () => {
  //     window.removeEventListener('scroll', handleScrollButtonVisibility);
  //   };
  // }, []);

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
      <CustomComponent
        Component={Component}
        pageProps={pageProps}
        router={router}
      />
      <footer>
        <AppFooter />
      </footer>
      {showScrollButton && (
        <ScrollUpButtonWrap onClick={scrollToTop}>
          <ScrollUpIcon />
        </ScrollUpButtonWrap>
      )}
    </>
  );
}

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollUpButtonWrap = styled('div', {
  display: 'flex',
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, .3)',
  borderRadius: '4px',
  height: '50px',
  width: '50px',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.8,
    backgroundColor: 'black',
  },
});
export default CustomApp;
