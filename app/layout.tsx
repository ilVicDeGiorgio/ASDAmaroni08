/* eslint-disable react/jsx-indent-props */
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';
// import Navbar from '../components/ColorSchemeToggle/Navbar';
import Prova from '@/components/prova';

export const metadata = {
  title: 'Fc-FantasyClub',
  description: 'Fantasy Club',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        {/* <Navbar></Navbar> */}
        <Prova></Prova>
      </body>
    </html>
  );
}
