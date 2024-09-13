'use client';

import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import { PiList, PiBell, PiMagnifyingGlass, PiLog } from 'react-icons/pi';
import Image from 'next/image';
import logo1 from '/public/FC25.png';
import logo2 from '/public/PML.png';
import styles from './headbar.module.scss';
import clsx from 'clsx';

export default function Headbar(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={clsx(styles.root, 'Headbar-root')}>
      <div className={styles.leftSection}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <PiList />
        </button>
        <Link href="/" className={styles.logo}>
          <Image src={logo1} alt="Logo1" height={74} width={120} />
        </Link>
        <Link href="/" className={styles.logo}>
          <Image src={logo2} alt="Logo2" height={44} width={44} />
        </Link>
      </div>
      <div className={clsx(styles.centerSection, { [styles.searchVisible]: isSearchVisible })}>
        {isSearchVisible ? (
          <input
            type="text"
            placeholder="Cerca..."
            className={styles.searchInput}
            onBlur={() => setSearchVisible(false)}
          />
        ) : (
          <button className={styles.searchButton} onClick={() => setSearchVisible(true)}>
            <PiMagnifyingGlass />
          </button>
        )}
      </div>
      <div className={styles.rightSection}>
        <button className={styles.notificationsButton}>
          <PiBell />
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={closeMenu}>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link href="/home" onClick={closeMenu}>
                  Li1
                </Link>
              </li>
              <li>
                <Link href="/squadra" onClick={closeMenu}>
                  Li2
                </Link>
              </li>
              <li>
                <Link href="/mercato" onClick={closeMenu}>
                  li3
                </Link>
              </li>
              <li>
                <Link href="/classifica" onClick={closeMenu}>
                  Li4
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
