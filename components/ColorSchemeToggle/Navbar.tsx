'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>
        {/* Logo o nome del brand */}
        <Link href="/" passHref>
          <a style={styles.link}>My Brand</a>
        </Link>
      </div>
      <ul style={styles.navList}>
        {/* Link della navbar */}
        <li style={styles.navItem}>
          <Link href="/home" passHref>
            <a style={styles.link}>Home</a>
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about" passHref>
            <a style={styles.link}>About</a>
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact" passHref>
            <a style={styles.link}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Stili di base per la navbar (opzionale, puoi usare CSS/SASS)
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
  },
  brand: {
    fontSize: '1.5rem',
    color: '#fff',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  navItem: {
    fontSize: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
};

