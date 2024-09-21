'use client';

import React, { ReactElement, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PiList, PiBell, PiMagnifyingGlass, PiLog } from 'react-icons/pi';
import Image from 'next/image';
import logo1 from '/public/FC25.png';
import logo2 from '/public/PML.png';
import styles from './headbar.module.scss';
import clsx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text, MantineProvider } from '@mantine/core';

export default function Headbar(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  // Riferimento per la barra di ricerca
  const searchBarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Chiudi la barra di ricerca quando clicchi fuori da essa
  // PS: Ross, quando vedrai questo useEffect, sappi che ci ho litigato 2 ore.
  //    Funziona ma non riesco a trovare un modo per scriverlo diversamente :(
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setSearchVisible(false); // Nasconde la barra di ricerca di
      }
    };

    if (isSearchVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <>
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
        <div className={styles.centerSection}>
          <MantineProvider>
            <Group justify="center">
              <Button onClick={toggle}>Toggle dialog</Button>
            </Group>

            <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
              <Text size="sm" mb="xs" fw={500}>
                Subscribe to email newsletter
              </Text>

              <Group align="flex-end">
                <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
                <Button onClick={close}>Subscribe</Button>
              </Group>
            </Dialog>
          </MantineProvider>
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

      {/* La barra di ricerca visibile sotto la headbar */}
      {isSearchVisible && (
        <div className={styles.searchBar} ref={searchBarRef}>
          <input
            type="text"
            placeholder="Cerca..."
            className={styles.searchInput}
            onBlur={() => setSearchVisible(false)}
            // Nasconde la barra di ricerca al perdere del focus
          />
        </div>
      )}
    </>
  );
}
