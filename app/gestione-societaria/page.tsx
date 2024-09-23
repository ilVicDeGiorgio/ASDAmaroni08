'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Societaria(): ReactElement {
  return (
    <div className={styles.rootSocietaria}>
      <h1>Gestione Societaria</h1>
      <p>Questa è la pagina della Gestione Societaria</p>
    </div>
  );
}

export default Societaria;
