import { Stack } from '@mantine/core';
import { AdvancedStatistics, Cover, BoostYourLinksToday, Footer, Header } from 'components/home';

const HomePage = () => (
  <Stack>
    <Header />
    <Cover />
    <AdvancedStatistics />
    <BoostYourLinksToday />
    <Footer />
  </Stack>
);

export default HomePage;
