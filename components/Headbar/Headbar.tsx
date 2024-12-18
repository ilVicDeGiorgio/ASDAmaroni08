'use client';

import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import { PiList, PiBell, PiMagnifyingGlass } from 'react-icons/pi';
import { RiAdminFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { GiSoccerBall } from 'react-icons/gi';
import { FaFileContract } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';
import { TbBusinessplan } from 'react-icons/tb';
import { MdMapsHomeWork } from 'react-icons/md';

import Image from 'next/image';
import logo1 from '/public/FC25.png';
import logo2 from '/public/logoamaroni.png';
import { Dialog, Group, Button, TextInput, Text, MantineProvider } from '@mantine/core';
import styles from './headbar.module.scss';
import { Poppins } from '@next/font/google';
import clsx from 'clsx';
import { useDisclosure } from '@mantine/hooks';

export default function Headbar(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={clsx(styles.root, 'Headbar-root')}>
        <div className={styles.leftSection}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <PiList />
          </button>
          <Link href="/" className={styles.logo}>
            {/* spazio libero */}
          </Link>
          <Link href="/" className={styles.logo}>
            <div>ASD AMARONI 08</div>
          </Link>
        </div>
        <div className={styles.centerSection}>
          <MantineProvider>
            <Group justify="center">
              <Button onClick={toggle} className={styles.searchButton}>
                <PiMagnifyingGlass />
              </Button>
            </Group>

            <Dialog
              opened={opened}
              withCloseButton
              onClose={close}
              size="lg"
              radius="md"
              className={styles.searchBar}
            >
              <Text size="sm" mb="xs" fw={500}>
                Cerca Giocatore
              </Text>

              <Group align="flex-end">
                <TextInput
                  placeholder="Mario Balotelli..."
                  style={{ flex: 1 }}
                  className={styles.searchInput}
                />
                <Button onClick={close} className={styles.button}>
                  Search
                </Button>
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
                  <Link href="/admin" onClick={closeMenu}>
                    <RiAdminFill />
                    Admin
                  </Link>
                </li>
                <li>
                  <Link href="/giocatori" onClick={closeMenu}>
                    <CgProfile />
                    Giocatori
                  </Link>
                </li>
                <li>
                  <Link href="/squadra" onClick={closeMenu}>
                    <GiSoccerBall />
                    Squadra
                  </Link>
                </li>
                <li>
                  <Link href="/gestione-team" onClick={closeMenu}>
                    <IoSettingsSharp />
                    Eventi
                  </Link>
                </li>
                <li>
                  <Link href="/gestione-contratti" onClick={closeMenu}>
                    <FaFileContract />
                    Contratti
                  </Link>
                </li>
                <li>
                  <Link href="/gestione-societaria" onClick={closeMenu}>
                    <MdMapsHomeWork />
                    Società
                  </Link>
                </li>
                <li>
                  <Link href="/cassa" onClick={closeMenu}>
                    <TbBusinessplan />
                    Sponsor
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      {/**/}
    </>
  );
}
