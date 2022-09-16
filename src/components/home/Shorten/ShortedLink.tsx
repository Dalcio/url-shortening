import { Card, CardSection, createStyles, Stack, Text } from '@mantine/core';
import { TShortedLink } from 'store/store.types';
import Button from '../../Button';

type ShortedLinkProps = TShortedLink & {
  idx: number;
  onCopy: (idx: number) => void;
};

const useShortedLinkStyles = createStyles((theme) => ({
  hr: {
    borderBottomColor: theme.colors.gray[0],
    borderWidth: '1px',
    opacity: 0.6,
  },
  shortedLink: {
    color: theme.colors.cyan[0],
  },
}));

const ShortedLink = ({ copied, idx, onCopy, link, shortedLink }: ShortedLinkProps) => {
  const { classes } = useShortedLinkStyles();

  return (
    <Card radius="md">
      <Text pb="md" weight={600} size="xl">
        {link}
      </Text>
      <CardSection>
        <hr className={classes.hr} />
      </CardSection>
      <Stack spacing="md" pt="md">
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
    </Card>
  );
};
export default ShortedLink;
