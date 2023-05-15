import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          {/* Inject the Segment snippet into the <head> of the document  */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
