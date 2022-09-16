import { Burger, createStyles, Stack, Text } from '@mantine/core';
import Logo from 'assets/logo';
import Button from 'components/Button';
import { useState } from 'react';
import { Row } from 'theme/restyled';

const useHeaderStyles = (hide: boolean) =>
  createStyles((theme) => ({
    wrapper: {
      position: 'fixed',
      left: '0',
      right: '0',
      top: '0',
      zIndex: 10,
      backgroundColor: theme.white,

      '.pane': {
        display: (hide && 'flex') || 'none',
        position: 'fixed',
        background: 'transparent',
        border: 'none',
        inset: '0',
        cursor: 'default',
        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
      },
    },
    container: {
      position: 'relative',
    },
    burger: {
      display: 'block',
      zIndex: 1,
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
    menu: {
      display: 'flex',
      position: 'static',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      paddingLeft: `${theme.spacing.xl}px`,

      '.nav, .auth': {
        flexDirection: 'row',
      },
      '.nav': {
        color: theme.colors.gray[0],
        '& > *:hover': {
          color: '#000',
          cursor: 'pointer',
        },
      },

      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
        display: (hide && 'flex') || 'none',
        position: 'absolute',
        width: 'unset',
        backgroundColor: theme.colors.violet[0],
        borderRadius: `${theme.radius.md}px`,
        right: `${theme.spacing.xl}px`,
        left: `${theme.spacing.xl}px`,
        bottom: `-${18 * theme.spacing.xl}px`,
        padding: `${theme.spacing.lg}px`,

        animation: 'slide-left linear 300ms',

        '.nav, .auth': {
          flexDirection: 'column',
          width: '100%',
          padding: `${theme.spacing.lg}px`,
          rowGap: `${theme.spacing.lg}px`,
        },
        '.nav': {
          alignItems: 'center',
          color: theme.white,
          fontWeight: 500,
        },
        '.auth': {
          borderTop: `1px solid ${theme.colors.gray[1]}`,
        },
      },
    },
  }))();

const useHeader = () => {
  const [hide, setHide] = useState<boolean>(false);

  const handleHide = () => {
    setTimeout(() => {
      setHide((prev) => !prev);
    }, 300);
  };

  return {
    hide,
    handleHide,
  };
};

const Header = () => {
  const { hide, handleHide } = useHeader();
  const { classes } = useHeaderStyles(hide);

  return (
    <Stack className={classes.wrapper} align="center" p="lg">
      <div className="wrapper">
        <Row className={classes.container} justify="space-between" align="center" px="xl">
          <Logo />
          <Burger className={classes.burger} opened={hide} onClick={handleHide} />
          <button className="pane" onClick={handleHide} type="button" />
          <Stack className={classes.menu}>
            <Stack className="nav">
              <Text size="xl">Feature</Text>
              <Text size="xl">Pricing</Text>
              <Text size="xl">Resources</Text>
            </Stack>
            <Stack className="auth">
              <Button label="login" size="xl" variant="light" />
              <Button label="Sign Up" size="xl" />
            </Stack>
          </Stack>
        </Row>
      </div>
    </Stack>
  );
};

export default Header;
