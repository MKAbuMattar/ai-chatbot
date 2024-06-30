import {Fragment} from 'react';
import type {AppType} from 'next/dist/shared/lib/utils';
import type {AppProps} from 'next/app';
import Head from 'next/head';

// style
import 'tailwindcss/tailwind.css';
import '@/styles/globals.scss';

// @mkabumattar/ai-chatbot

const _App: AppType = ({Component, pageProps}: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>@mkabumattar/ai-chatbot</title>
        <meta name="description" content="AI chatbot app template" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default _App;
