import { createStyles } from '@mantine/core';

const useCoverStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    alignItems: 'center',
    marginTop: '100px',
    backgroundColor: theme.white,

    [theme.fn.largerThan('sm')]: {
      padding: '100px 0',
      paddingLeft: `${theme.spacing.xl}px`,
    },
    [theme.fn.largerThan(1280)]: {
      paddingLeft: 0,
    },
  },
  container: {
    display: 'flex',

    [theme.fn.largerThan('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
  },
  illustration: {
    position: 'absolute',
    right: '-210px',
    top: '0px',
    height: '448px',
    width: '680px',

    [theme.fn.largerThan('sm')]: {
      position: 'static',
      gridColumnStart: '-1',
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: `${438 + theme.spacing.xl}px`,
    padding: `${2 * theme.spacing.xl}px ${theme.spacing.xl}px`,
    '.description': {
      color: theme.colors.gray[0],
      fontWeight: 500,
    },
    [theme.fn.largerThan('sm')]: {
      marginTop: 'unset',
      width: '500px',
      textAlign: 'left',
      alignItems: 'flex-start',
      gridColumnStart: '1',
      gridRowStart: '1',
    },
  },
}));

export default useCoverStyles;
