import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>URL Shortening</title>
    </Head>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <GlobalStyles />
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default App;
