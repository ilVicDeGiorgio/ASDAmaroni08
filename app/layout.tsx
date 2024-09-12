/* eslint-disable react/jsx-indent-props */
import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript } from '@mantine/core';
import Navbar from '../components/Navbar/Navbar';

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
      <body>
        {/* <MantineProvider theme={theme}>{children}</MantineProvider> */}
        {children}
        <Navbar/>
      </body>
    </html>
  );
}
