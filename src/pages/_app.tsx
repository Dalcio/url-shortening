import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>URL Shortening</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <GlobalStyles />
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default App;
