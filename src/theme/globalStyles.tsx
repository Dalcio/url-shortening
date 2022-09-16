import { Global, MantineTheme } from '@mantine/core';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={({ fn, spacing }: MantineTheme) => ({
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
        width: 'min(100%, 1240px)',
      },

      '@keyframes slide-left': {
        from: {
          right: '-100vw',
          left: '100vw',
        },
        to: {
          right: `${spacing.xl}px`,
          left: `${spacing.xl}px`,
        },
      },
    })}
  />
);

export default GlobalStyles;
