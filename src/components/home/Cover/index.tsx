/* eslint-disable @next/next/no-img-element */
import { createStyles, Stack, Text, Title } from '@mantine/core';
import Button from 'components/Button';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    alignItems: 'center',
    marginTop: '60px',
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
  },
  illustration: {
    position: 'absolute',
    right: '-210px',
    top: '0px',
    height: '448px',
    width: '680px',
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
  },
}));

const Cover = () => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.wrapper}>
      <div className="wrapper">
        <Stack className={classes.container}>
          <img
            className={classes.illustration}
            src="/images/illustration-working.svg"
            alt="illustration working"
          />
          <Stack className={classes.content}>
            <Title className={classes.title}>More than just shorter links</Title>
            <Text className="description" mb="xl">
              Build your brand&apos;s recognition and get detailed insights on how your links are
              performing
            </Text>
            <Button label="Get Started" />
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
};

export default Cover;
