import React from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';
import '../src/index.css';
import './docs.css';
import { DocsContainer } from './DocsContainer';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals['theme'] ?? 'light';
  document.documentElement.classList.toggle('dark', theme === 'dark');
  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    backgrounds: {
      disable: true,
    },
    docs: {
      container: DocsContainer,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    layout: 'centered',
  },
};

export default preview;