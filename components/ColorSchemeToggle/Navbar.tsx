'use client';

import React from 'react';
import Link from 'next/link';
import { Flex } from '@mantine/core';
import styles from './navbar.module.scss';
import { PiHouseLight, PiUsersThree, PiRepeatOnce, PiRanking } from 'react-icons/pi';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {/* Link della navbar */}
        <li className={styles.navItem}>
          <Link href="/home" className={styles.link} passHref>
            <PiHouseLight />
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/squadra" className={styles.link} passHref>
            <PiUsersThree />
            Squadra
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/mercato" className={styles.link} passHref>
            <PiRepeatOnce />
            Mercato
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/classifica" className={styles.link} passHref>
            <PiRanking />
            Classifica
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Stili di base per la navbar (opzionale, puoi usare CSS/SASS)
