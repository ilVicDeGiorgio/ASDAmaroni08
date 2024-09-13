'use client';

import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import { PiList, PiBell, PiMagnifyingGlass, PiLog } from 'react-icons/pi';
import Image from 'next/image'; // Importa il componente Image di Next.js
import logo1 from '/public/FC25.png'; // Importa l'immagine come modulo
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
          <Image
            src={logo1} // Usa l'immagine importata
            alt="Logo1"
            height={74} // Imposta l'altezza dell'immagine
            width={120} // Imposta la larghezza dell'immagine
          />
        </Link>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo2} // Usa l'immagine importata
            alt="Logo2"
            height={44} // Imposta l'altezza dell'immagine
            width={44} // Imposta la larghezza dell'immagine
          />
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
                  Home
                </Link>
              </li>
              <li>
                <Link href="/squadra" onClick={closeMenu}>
                  Squadra
                </Link>
              </li>
              <li>
                <Link href="/mercato" onClick={closeMenu}>
                  Mercato
                </Link>
              </li>
              <li>
                <Link href="/classifica" onClick={closeMenu}>
                  Classifica
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
