import { Card, CardSection, Stack, Text } from '@mantine/core';
import { TShortedLink } from 'store/store.types';

import Button from '../../Button';
import { useShortedLinkStyles } from './Shorten.styles';

type ShortedLinkProps = TShortedLink & {
  idx: number;
  onCopy: (idx: number) => void;
};

const ShortedLink = ({ copied, idx, onCopy, link, shortedLink }: ShortedLinkProps) => {
  const { classes } = useShortedLinkStyles();

  return (
    <Card radius="md">
      <Stack spacing={0} className={classes.container}>
        <Text pb="md" weight={600} size="xl" className={classes.text}>
          {link}
        </Text>
        <CardSection>
          <hr className={classes.hr} />
        </CardSection>
        <Stack spacing="md" pt="md" className={classes.container}>
          <Text className={classes.shortedLink} weight={500} size="xl">
            {shortedLink}
          </Text>
          <Button
            label={copied ? 'Copied!' : 'Copy'}
            radius="md"
            size="xl"
            violet={copied}
            onCLick={() => onCopy(idx)}
          />
        </Stack>
      </Stack>
    </Card>
  );
};
export default ShortedLink;
