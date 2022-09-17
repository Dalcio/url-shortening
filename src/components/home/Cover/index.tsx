/* eslint-disable @next/next/no-img-element */
import { Stack, Text, Title } from '@mantine/core';
import Button from 'components/Button';
import useCoverStyles from './Cover.styles';

const Cover = () => {
  const { classes } = useCoverStyles();

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
