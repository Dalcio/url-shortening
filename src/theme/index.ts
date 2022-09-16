import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colors: {
    cyan: ['hsl(180, 66%, 49%)'],
    veryDarkBlue: ['hsl(255, 11%, 22%)'],
    gray: ['hsl(0, 0%, 75%)', 'hsl(230, 25%, 95%)'],
    red: ['hsl(0, 87%, 67%)'],

    // (Dark, Grayish, Very Dark) Violet
    violet: ['hsl(257, 27%, 26%)', 'hsl(257, 7%, 63%)', 'hsl(260, 8%, 14%)'],
  },
  fontFamily: "'Nunito Sans', sans-serif",
};

export default theme;
