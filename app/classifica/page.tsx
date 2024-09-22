'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Classifica(): ReactElement {
  return (
    <div className={styles.rootClassifica}>
      <h1>Classifica</h1>
      <p>Questa è la pagina della classifica.</p>
    </div>
  );
}

export default Classifica;
