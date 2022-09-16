/* eslint-disable @next/next/no-img-element */
import { createStyles, Stack, Title } from '@mantine/core';
import Button from 'components/Button';

const useStyles = createStyles(({ colors, spacing }) => ({
  wrapper: {
    position: 'relative',
    height: '260px',
    background: colors.violet[0],
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: `${spacing.xl}px ${spacing.xl}px`,
    alignItems: 'center',
    justifyContent: 'center',
    '& > *:not(img)': {
      zIndex: 1,
    },
  },
  bgBoost: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: '0',
  },
}));

const BoostYourLinksToday = () => {
  const {
    classes,
    theme: { breakpoints },
  } = useStyles();

  return (
    <Stack className={classes.wrapper}>
      <div className="wrapper">
        <Stack className={classes.container}>
          <picture>
            <source
              className={classes.bgBoost}
              media={`(max-width: ${breakpoints.sm}px)`}
              srcSet="/images/bg-boost-mobile.svg"
            />
            <img
              className={classes.bgBoost}
              src="/images/bg-boost-desktop.svg"
              alt="boost your links today background"
            />
          </picture>
          <Title color="white">Boost Your Links Today</Title>
          <Button label="Get Started" />
        </Stack>
      </div>
    </Stack>
  );
};

export default BoostYourLinksToday;
