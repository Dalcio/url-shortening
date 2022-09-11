import { createStyles, Button as MantineButton, ButtonProps, Title, Text } from '@mantine/core';

const useButtonStyles = createStyles((t) => ({
  container: {
    height: '70px',
    backgroundColor: t.colors.cyan[0],
    '&:hover': {
      backgroundColor: t.colors.cyan[0],
      opacity: 0.8,
    },
  },
  label: {
    fontSize: '26px',
    fontWeight: 500,
    margin: `${t.spacing.xl + t.spacing.lg}px`,
  },
  light: {
    height: '70px',
    backgroundColor: 'transparent',
    color: t.colors.gray[0],
    '&:hover': {
      backgroundColor: 'transparent',
      color: t.colors.cyan[0],
      opacity: 0.8,
    },
  },
}));

type Props = {
  label: string;
} & ButtonProps;

const Button = ({ label, variant, ...rest }: Props) => {
  const { classes } = useButtonStyles();

  return (
    <MantineButton
      className={variant === 'light' ? classes.light : classes.container}
      radius="xl"
      {...rest}
    >
      <Text className={classes.label}>{label}</Text>
    </MantineButton>
  );
};

export default Button;
