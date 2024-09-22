'use client';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Statistiche() {
  return (
    <div className={styles.standingsContainer}>
      <div className={styles.miniHeadbar}>
        <Link href="/classifica">
          <button className={styles.navButton}>Classifiche</button>
        </Link>
        <Link href="/calendario">
          <button className={styles.navButton}>Calendario</button>
        </Link>
        <Link href="/statistiche">
          <button className={styles.navButton}>Statistiche</button>
        </Link>
      </div>
      <h1>Statistiche</h1>
    </div>
  );
}
