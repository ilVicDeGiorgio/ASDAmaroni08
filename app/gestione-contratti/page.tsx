'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Contratti(): ReactElement {
  return (
    <div className={styles.rootContratti}>
      <h1>Gestione Contratti</h1>
      <p>Questa è la pagina per la gestione dei contratti</p>
    </div>
  );
}

export default Contratti;
