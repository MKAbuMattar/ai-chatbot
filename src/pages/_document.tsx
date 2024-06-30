import {Fragment} from 'react';
import type {DocumentContext} from 'next/document';
import Document, {Head, Html, Main, NextScript} from 'next/document';

class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />,
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <Fragment>{initialProps.styles}</Fragment>,
      };
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
