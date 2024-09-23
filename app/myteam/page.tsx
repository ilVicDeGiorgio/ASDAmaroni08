'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function MyTeam(): ReactElement {
  return (
    <div className={styles.rootMyTeam}>
      <h1>La mia Squadra</h1>
      <p>Questa è la pagina della mia Squadra</p>
    </div>
  );
}

export default MyTeam;
