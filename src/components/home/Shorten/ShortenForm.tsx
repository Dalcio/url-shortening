/* eslint-disable @next/next/no-img-element */
import { createStyles, Input, Stack } from '@mantine/core';
import Button from 'components/Button';

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
  },
}));

const ShortenForm = () => {
  const {
    classes,
    theme: { breakpoints },
  } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Stack className={classes.container}>
        <Input variant="filled" size="xl" placeholder="Shorten a link here..." />
        <Button label="Shorten It!" radius="md" />
        <picture>
          <source
            media={`(min-width: ${breakpoints.sm}px)`}
            srcSet="/images/bg-shorten-desktop.svg"
          />
          <img src="/images/bg-shorten-mobile.svg" alt="background shorten" />
        </picture>
      </Stack>
    </div>
  );
};

export default ShortenForm;
