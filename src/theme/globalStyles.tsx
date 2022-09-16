import { Global, MantineTheme } from '@mantine/core';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={({ fn }: MantineTheme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
      },

      body: {
        ...fn.fontStyles(),
        fontSize: '18px',
      },

      '.container, .wrapper': {
        display: 'flex',
        flexDirection: 'column',
        width: 'min(100%, 940px)',
      },
    })}
  />
);

export default GlobalStyles;
