import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '50%',
      backgroundColor: theme.white,
    },
  },
  container: {
    position: 'relative',
    backgroundColor: theme.colors.violet[0],
    width: `calc(100% - ${2 * theme.spacing.xl}px)`,
    padding: `${theme.spacing.xl}px`,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
    '& > *:not(picture)': {
      position: 'relative',
      zIndex: 1,
    },
    picture: {
      position: 'absolute',
      inset: 0,
      img: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80%',
        height: '65%',
        [theme.fn.largerThan('sm')]: {
          width: '100%',
          height: '100%',
          bottom: 0,
        },
      },
    },
    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  errorInput: {
    borderColor: theme.colors.red[0],
    '&::placeholder': {
      color: theme.colors.red[0],
    },
  },
  errorText: {
    color: theme.colors.red[0],
  },
}));

export default useStyles;
