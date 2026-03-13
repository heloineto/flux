import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import type { Decorator, Preview } from '@storybook/nextjs-vite';
import { theme } from '../app/theme';

const withMantine: Decorator = (renderStory, context) => {
  const scheme = (context.globals['theme'] || 'light') as 'light' | 'dark';
  return (
    <MantineProvider theme={theme} forceColorScheme={scheme}>
      {renderStory()}
    </MantineProvider>
  );
};

const preview: Preview = {
  decorators: [withMantine],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Mantine color scheme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
