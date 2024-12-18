'use client';
import React, { ReactElement } from 'react';
import styles from './page.module.scss';
import { MantineProvider } from '@mantine/core';
import Demo from '../../components/Carousel/Demo';
import MatchList from '../../components/MatchList/MatchList';
import clsx from 'clsx';

function Partite(): ReactElement {
  return (
    <div className={clsx(styles.root, 'Homepage-root')}>
      <MantineProvider>
        <Demo />
      </MantineProvider>
      <div className={styles.separator}>Partite da giocare</div>
      <MatchList />
    </div>
  );
}

export default Partite;
