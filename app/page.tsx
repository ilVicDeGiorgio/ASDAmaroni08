import { ReactNode } from 'react';
import clsx from 'clsx';
import Demo from '../components/Carousel/Demo';
import { MantineProvider } from '@mantine/core';
import MatchList from '../components/MatchList/MatchList';

import styles from './page.module.scss';

export default function HomePage(): ReactNode {
  return (
    <div className={clsx(styles.root, 'Homepage-root')}>
      <MantineProvider>
        <Demo></Demo>
      </MantineProvider>
      <div className={styles.separator}>Partite da giocare</div>
      <MatchList></MatchList>
    </div>
  );
}
