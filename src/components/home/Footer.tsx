import { createStyles, Stack, Text, Title } from '@mantine/core';
import { IconFacebook, IconInstagram, IconPinterest, IconTwitter } from 'assets/social';
import { Row } from 'theme/restyled';

const useStyles = createStyles((t) => ({
  container: {
    gap: `${2 * t.spacing.xl}px`,
    padding: `${3 * t.spacing.xl}px`,
    alignItems: 'center',
    backgroundColor: t.colors.violet[2],
    color: t.white,
    textAlign: 'center',

    [t.fn.largerThan('md')]: {},

    'svg:hover': {
      cursor: 'pointer',
      stroke: t.colors.cyan[0],
      path: {
        fill: t.colors.cyan[0],
      },
    },
  },
  blockContainer: {
    '.blockTitle': {
      fontWeight: 700,
    },
    '.blockText': {
      color: t.colors.gray[0],
    },
  },
}));

type BlockProps = {
  title: string;
  elements: string[];
};

const Block = ({ elements, title }: BlockProps) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.blockContainer}>
      <Text className="blockTitle" mb="md">
        {title}
      </Text>
      {elements.map((element) => (
        <Text className="blockText" key={element}>
          {element}
        </Text>
      ))}
    </Stack>
  );
};

const Footer = () => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.container}>
      {/* <img src="/mobile-design.jpg" alt="" /> */}
      <Title>Shortly</Title>
      <Block title="Features" elements={['Link Shorting', 'BrandedLinks', 'Analytics']} />
      <Block title="Resources" elements={['Blog', 'Developers', 'Support']} />
      <Block title="Company" elements={['About', 'Our Team', 'Careers', 'Contact']} />
      <Row>
        <IconFacebook />
        <IconInstagram />
        <IconPinterest />
        <IconTwitter />
      </Row>
    </Stack>
  );
};

export default Footer;
