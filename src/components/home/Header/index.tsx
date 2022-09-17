import { Burger, Stack, Text } from '@mantine/core';
import Logo from 'assets/logo';
import Button from 'components/Button';
import { Row } from 'theme/restyled';
import useHeader from './Header.hooks';
import useHeaderStyles from './Header.styles';

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
