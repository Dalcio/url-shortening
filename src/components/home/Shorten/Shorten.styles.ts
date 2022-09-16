import { createStyles } from '@mantine/core';

export const useShortedLinkStyles = createStyles((theme) => ({
  hr: {
    borderBottomColor: theme.colors.gray[0],
    borderWidth: '1px',
    opacity: 0.6,
  },
  shortedLink: {
    color: theme.colors.cyan[0],
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
