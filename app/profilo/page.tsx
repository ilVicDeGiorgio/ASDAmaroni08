'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Profilo(): ReactElement {
  return (
    <div className={styles.rootProfilo}>
      <h1>Profilo</h1>
      <p>Questa è la pagina del profilo</p>
    </div>
  );
}

export default Profilo;
