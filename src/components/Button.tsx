import { createStyles, Button as MantineButton, ButtonProps, Title, Text } from '@mantine/core';

const useButtonStyles = (withSize: boolean, violet: boolean) =>
  createStyles((t) => ({
    container: {
      height: (!withSize && '70px') || undefined,
      backgroundColor: (!violet && t.colors.cyan[0]) || t.colors.violet[0],
      '&:hover': {
        backgroundColor: (!violet && t.colors.cyan[0]) || t.colors.violet[0],
        opacity: 0.8,
      },
    },
    label: {
      fontSize: (!withSize && '26px') || undefined,
      fontWeight: (!withSize && 500) || undefined,
      margin: (!withSize && `${t.spacing.xl + t.spacing.lg}px`) || undefined,
    },
    light: {
      height: (!withSize && '70px') || undefined,
      backgroundColor: 'transparent',
      color: t.colors.gray[0],
      '&:hover': {
        backgroundColor: 'transparent',
        color: t.colors.cyan[0],
        opacity: 0.8,
      },
    },
  }))();

type Props = {
  label: string;
  violet?: boolean;
  onCLick?: () => void;
} & ButtonProps;

const Button = ({ label, onCLick, size, variant, violet, ...rest }: Props) => {
  const { classes } = useButtonStyles(!!size, !!violet);

  return (
    <MantineButton
      className={variant === 'light' ? classes.light : classes.container}
      radius="xl"
      size={size}
      onClick={onCLick}
      {...rest}
    >
      <Text className={classes.label}>{label}</Text>
    </MantineButton>
  );
};

export default Button;
