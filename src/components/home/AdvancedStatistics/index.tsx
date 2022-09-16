import { createStyles, Stack, Text, Title } from '@mantine/core';
import AdvancedStatisticsCard from './AdvancedStatisticsCard';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray[1],
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: `${3 * theme.spacing.xl}px ${theme.spacing.xl}px`,
  },
  statistics: {
    alignItems: 'center',
    marginTop: `${2 * theme.spacing.md}px`,
    gap: `${2 * theme.spacing.xl}px`,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '10px',
      left: 'calc(50% - 5ox)',
      top: '10px',
      bottom: '10px',
      backgroundColor: theme.colors.cyan[0],
    },
    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      marginTop: 0,
      alignItems: 'start',

      '& > div:nth-of-type(2)': {
        marginTop: '90px',
      },
      '& > div:last-of-type': {
        marginTop: '140px',
      },

      '&:before': {
        width: 'unset',
        height: '10px',
        marginTop: 'calc(16% - 5px)',
        'margin-top': 'calc(16% - 5px)',
        bottom: 'unset',
        top: 'unset',
        left: '10px',
        right: '10px',
      },
    },
  },
  description: {
    textAlign: 'center',
    color: theme.colors.gray[0],
    fontWeight: 500,
  },
}));

const AdvancedStatistics = () => {
  const { classes } = useStyles();

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
