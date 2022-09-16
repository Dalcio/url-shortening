import { createStyles } from '@mantine/core';

export const useShortedLinkStyles = createStyles((theme) => ({
  container: {
    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 'unset!important',
    },
  },
  hr: {
    borderBottomColor: theme.colors.gray[0],
    borderWidth: '1px',
    opacity: 0.6,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  shortedLink: {
    color: theme.colors.cyan[0],
  },
  text: {
    [theme.fn.largerThan('sm')]: {
      paddingBottom: 'unset!important',
    },
  },
}));

const useShortenStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray[1],
  },
  container: {
    width: '100%',
  },
  shortedLinks: {
    width: `calc(100% - ${2 * theme.spacing.xl}px)`,
  },
}));

export default useShortenStyles;
