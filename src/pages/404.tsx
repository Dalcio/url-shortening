import { createStyles, Container, Title, Text, Button, Group, Image } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    paddingBottom: 80,
  },

  inner: {
    position: 'relative',
    top: '25vh',
  },

  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.75,
  },

  content: {
    paddingTop: 220,
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: theme.fontFamily,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const NothingFoundBackground = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Image src="/404.svg" className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Group position="center">
            <Link href="/" passHref>
              <Button size="xl" component="a" variant="subtle" radius="md" className="element-bg">
                Take me back to home page
              </Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default NothingFoundBackground;
