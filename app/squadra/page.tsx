'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Squadra(): ReactElement {
  return (
    <div className={styles.rootSquadra}>
      <h1>Squadra</h1>
      <p>Questa è la pagina della Squadra.</p>
    </div>
  );
}

export default Squadra;
