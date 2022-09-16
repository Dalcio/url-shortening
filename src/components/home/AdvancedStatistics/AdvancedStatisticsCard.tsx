import { createStyles, Image, Stack, Text } from '@mantine/core';

type AdvancedStatisticsProps = {
  title: string;
  description: string;
};

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    // boxShadow:
    //   '0 1px 3px rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.05) 0px 10px 15px -5px,rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
    borderRadius: `${theme.radius.md}px`,
    backgroundColor: theme.white,
    marginTop: '45px',
    padding: `${40 + theme.spacing.xl}px ${theme.spacing.xl}px ${2 * theme.spacing.xl}px`,
    textAlign: 'center',
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90px',
    width: '90px',
    borderRadius: '50%',
    top: '-45px',
    right: 'calc(50% - 45px)',
    backgroundColor: theme.colors.violet[0],
  },
  description: {
    color: theme.colors.gray[0],
  },
}));

const AdvancedStatisticsCard = ({ title, description }: AdvancedStatisticsProps) => {
  const { classes } = useStyles();

  return (
    <Stack className={`${classes.container} card`}>
      <Stack className={classes.icon}>
        <Image
          src={`/images/icon-${title.toLowerCase().replaceAll(' ', '-')}.svg`}
          alt={`${title} icon`}
          width={40}
          height={40}
        />
      </Stack>
      <Text weight={700} size="lg">
        {title}
      </Text>
      <Text className={classes.description}>{description}</Text>
    </Stack>
  );
};

export default AdvancedStatisticsCard;
