import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';

export const parameters = { layout: 'fullscreen' };

const ThemeWrapper = (props: { children: React.ReactNode }) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <NotificationsProvider>{props.children}</NotificationsProvider>
  </MantineProvider>
);

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
