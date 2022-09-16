import { createStyles, Stack } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import useStore from 'store';
import ShortedLink from './ShortedLink';
import ShortenForm from './ShortenForm';

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.colors.gray[1],
  },
  shortedLinks: {
    width: `calc(100% - ${2 * theme.spacing.xl}px)`,
  },
}));

const useShorten = () => {
  const toggleCopiedLink = useStore((s) => s.toggleCopiedLink);

  const handleCopyLink = (idx: number) => {
    const linkToCopy = toggleCopiedLink(idx);

    if (navigator && linkToCopy) {
      navigator.clipboard.writeText(linkToCopy);
    }
  };

  return { handleCopyLink };
};

const Shorten = () => {
  const { classes } = useStyles();
  const shortedLinks = useStore((s) => s.shortedLinks);
  const { handleCopyLink } = useShorten();

  return (
    <Stack align="center" className={classes.container}>
      <ShortenForm />
      <Stack className={classes.shortedLinks} mt="md" spacing="xl">
        {shortedLinks.map((link, idx) => (
          <ShortedLink {...link} idx={idx} key={uuid()} onCopy={handleCopyLink} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Shorten;
