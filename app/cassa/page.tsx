'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Cassa(): ReactElement {
  return (
    <div className={styles.rootCassa}>
      <h1>Movimenti Cassa</h1>
      <p>Questa è la pagina dei movimenti cassa</p>
    </div>
  );
}

export default Cassa;
