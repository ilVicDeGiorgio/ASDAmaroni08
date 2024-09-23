'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';

function Admin(): ReactElement {
  return (
    <div className={styles.rootAdmin}>
      <h1>Admin</h1>
      <p>Questa è la pagina dell'Admin</p>
    </div>
  );
}

export default Admin;
