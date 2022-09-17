import { Stack, Text, Title } from '@mantine/core';
import useAdvancedStatisticsStyles from './AdvancedStatistics.styles';
import AdvancedStatisticsCard from './AdvancedStatisticsCard';

const AdvancedStatistics = () => {
  const { classes } = useAdvancedStatisticsStyles();

  return (
    <Stack className={classes.wrapper}>
      <div className="wrapper">
        <Stack className={classes.container} spacing="md">
          <Title>Advanced Statistics</Title>
          <Text className={classes.description}>
            Track how your links are performing across the web with our advanced statistics
            dashboard
          </Text>
          <Stack className={classes.statistics}>
            <AdvancedStatisticsCard
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
            />
            <AdvancedStatisticsCard
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <AdvancedStatisticsCard
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
};

export default AdvancedStatistics;
