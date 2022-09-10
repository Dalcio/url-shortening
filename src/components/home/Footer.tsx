import { createStyles, Image, Stack, Text, Title } from '@mantine/core';
import { Row } from 'theme/restyled';

const useFooterStyles = createStyles((t) => ({
  container: {
    gap: `${2 * t.spacing.xl}px`,
    padding: `${3 * t.spacing.xl}px`,
    alignItems: 'center',
    backgroundColor: t.colors.violet[2],
    color: t.white,
    textAlign: 'center',

    [t.fn.largerThan('md')]: {},

    '.social:hover': {
      opacity: 0.1,
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
  const { classes } = useFooterStyles();

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
  const { classes } = useFooterStyles();

  return (
    <Stack className={classes.container}>
      <Title>Shortly</Title>
      <Block title="Features" elements={['Link Shorting', 'BrandedLinks', 'Analytics']} />
      <Block title="Resources" elements={['Blog', 'Developers', 'Support']} />
      <Block title="Company" elements={['About', 'Our Team', 'Careers', 'Contact']} />
      <Row>
        {['facebook', 'twitter', 'pinterest', 'instagram'].map((social) => (
          <Image className="social" src={`/images/icon-${social}.svg`} key={social} />
        ))}
      </Row>
    </Stack>
  );
};

export default Footer;
