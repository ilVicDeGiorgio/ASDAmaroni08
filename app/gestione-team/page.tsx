'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function GestioneTeam(): ReactElement {
  return (
    <div className={styles.rootGestioneTeam}>
      <h1>Gestione Team</h1>
      <p>Questa è la pagina per la gestione team</p>
    </div>
  );
}

export default GestioneTeam;
