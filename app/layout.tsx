/* eslint-disable react/jsx-indent-props */
import '@mantine/core/styles.css';
import React from 'react';
import clsx from 'clsx';
import Navbar from '../components/Navbar/Navbar';
import Headbar from '@/components/Headbar/Headbar';

import styles from './layout.module.scss';
import { Poppins } from '@next/font/google';
import { MantineProvider } from '@mantine/core';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'ASD Amaroni 08',
  description: 'ASD-Amaroni08-Website',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoamaroni.png" type="image/png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={(clsx(styles.root), poppins.className)}>
        <div>
          <Headbar />
          {/* <MantineProvider theme={theme}>{children}</MantineProvider> */}
          <MantineProvider>{children}</MantineProvider>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
