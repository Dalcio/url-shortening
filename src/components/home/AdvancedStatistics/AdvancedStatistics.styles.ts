import { createStyles } from '@mantine/core';

const useAdvancedStatisticsStyles = createStyles((theme) => ({
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
        marginTop: 'calc(25% - 5px)',
        'margin-top': 'calc(25% - 5px)',
        bottom: 'unset',
        top: 'unset',
        left: '10px',
        right: '10px',
      },
    },
    [theme.fn.largerThan('md')]: {
      '&:before': {
        marginTop: 'calc(20% - 5px)',
        'margin-top': 'calc(20% - 5px)',
      },
    },
  },
  description: {
    textAlign: 'center',
    color: theme.colors.gray[0],
    fontWeight: 500,
    maxWidth: '400px',
    marginBottom: '20px',
  },
}));

export default useAdvancedStatisticsStyles;
