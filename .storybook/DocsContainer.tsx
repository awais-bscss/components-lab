import React, { useSyncExternalStore, type ReactNode } from 'react';
import { DocsContainer as BaseDocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import { themes } from 'storybook/theming';

interface CustomDocsContainerProps extends DocsContainerProps {
  children?: ReactNode;
}

function subscribe(onChange: () => void) {
  if (typeof document === 'undefined') {
    return () => {};
  }
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => {
    observer.disconnect();
  };
}

function getSnapshot(): boolean {
  if (typeof document === 'undefined') {
    return false;
  }
  return document.documentElement.classList.contains('dark');
}

function getServerSnapshot(): boolean {
  return false;
}

export const DocsContainer = (props: CustomDocsContainerProps) => {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <BaseDocsContainer {...props} theme={isDark ? themes.dark : themes.light}>
      {props.children}
    </BaseDocsContainer>
  );
};

