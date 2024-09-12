/* eslint-disable react/jsx-indent-props */
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import clsx from 'clsx';

import styles from './layout.module.scss'

export const metadata = {
  title: 'Fc-FantasyClub',
  description: 'Fantasy Club',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={clsx(styles.root)}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
