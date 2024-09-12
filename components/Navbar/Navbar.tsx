'use client';

import React, { ReactElement } from 'react';
import Link from 'next/link';
import { PiHouseLight, PiUsersThree, PiSwap, PiRanking } from 'react-icons/pi';

import styles from './navbar.module.scss';
import clsx from 'clsx';

export default function Navbar(): ReactElement {
  return (
    <nav className={clsx(styles.root, 'Navbar-root')}>
      <ul>
        {/* Link della navbar */}
        <li>
          <Link href="/home" passHref>
            <PiHouseLight />
            Home
          </Link>
        </li>
        <li>
          <Link href="/squadra" passHref>
            <PiUsersThree />
            Squadra
          </Link>
        </li>
        <li>
          <Link href="/mercato" passHref>
            <PiSwap />
            Mercato
          </Link>
        </li>
        <li>
          <Link href="/classifica" passHref>
            <PiRanking />
            Classifica
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Stili di base per la navbar (opzionale, puoi usare CSS/SASS)
