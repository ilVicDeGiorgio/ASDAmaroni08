'use client';

import React, { ReactElement } from 'react';
import Link from 'next/link';
import { PiHouseLight, PiUsersThree, PiSwap, PiRanking } from 'react-icons/pi';
import clsx from 'clsx';

import styles from './navbar.module.scss';
import { MantineProvider } from '@mantine/core';

export default function Navbar(): ReactElement {
  return (
    <nav className={clsx(styles.root, 'Navbar-root')}>
      <ul>
        {/* Link della navbar */}
        <li>
          <Link href="/" passHref>
            <PiHouseLight />
            Home
          </Link>
        </li>
        <li>
          <Link href="/partite" passHref>
            <PiUsersThree />
            Partite
          </Link>
        </li>
        <li>
          <Link href="/mercato" passHref>
            <PiSwap />
            Mercato
          </Link>
        </li>
        <li>
          <MantineProvider>
            <Link href="/classifica">
              <PiRanking />
              Classifica
            </Link>
          </MantineProvider>
        </li>
      </ul>
    </nav>
  );
}
