import { ReactNode } from 'react';
import clsx from 'clsx';
import Demo from '../components/Carousel/Demo';
import { MantineProvider } from '@mantine/core';

import styles from './page.module.scss';

export default function HomePage(): ReactNode {
  return (
    <div className={clsx(styles.root, 'Homepage-root')}>
      <MantineProvider>
        <Demo></Demo>
      </MantineProvider>
      <div>Placeholder List</div>
    </div>
  );
}
