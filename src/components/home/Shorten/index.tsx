import { Stack } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import useStore from 'store';

import ShortedLink from './ShortedLink';
import ShortenForm from './ShortenForm';
import useShortenStyles from './Shorten.styles';
import useShorten from './Shorten.hooks';

const Shorten = () => {
  const { classes } = useShortenStyles();
  const shortedLinks = useStore((s) => s.shortedLinks);
  const { handleCopyLink } = useShorten();

  return (
    <Stack align="center" className={classes.wrapper}>
      <ShortenForm />
      <div className="wrapper">
        <Stack align="center" className={classes.container}>
          <Stack className={classes.shortedLinks} mt="xl" spacing="xl">
            {shortedLinks.map((link, idx) => (
              <ShortedLink {...link} idx={idx} key={uuid()} onCopy={handleCopyLink} />
            ))}
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
};

export default Shorten;
