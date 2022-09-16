/* eslint-disable @next/next/no-img-element */
import { Input, Stack, Text } from '@mantine/core';
import Button from 'components/Button';
import { ChangeEvent } from 'react';
import useShortenForm from './ShortenForm.hooks';
import useStyles from './ShortenForm.styles';

const ShortenForm = () => {
  const {
    classes,
    theme: { breakpoints },
  } = useStyles();
  const { error, handleLink, isShorting, link, onShortenIt } = useShortenForm();

  return (
    <div className={classes.wrapper}>
      <div className="wrapper">
        <Stack align="center">
          <Stack className={classes.container}>
            <Stack style={{ flexGrow: 1 }}>
              <Input
                variant="filled"
                size="xl"
                placeholder="Shorten a link here..."
                value={link}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => handleLink(evt.target.value)}
                radius="md"
                classNames={(error && { input: classes.errorInput }) || undefined}
              />
              {error && <Text className={classes.errorText}>{error}</Text>}
            </Stack>

            <Button
              label="Shorten It!"
              radius="md"
              onCLick={onShortenIt}
              loading={isShorting}
              size="xl"
            />
            <picture>
              <source
                media={`(min-width: ${breakpoints.sm}px)`}
                srcSet="/images/bg-shorten-desktop.svg"
              />
              <img src="/images/bg-shorten-mobile.svg" alt="background shorten" />
            </picture>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default ShortenForm;
