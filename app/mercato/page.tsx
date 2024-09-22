'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Mercato(): ReactElement {
  return (
    <div className={styles.rootMercato}>
      <h1>Mercato</h1>
      <p>Questa è la pagina del Mercato.</p>
    </div>
  );
}

export default Mercato;
