import { ReactNode } from 'react';

import styles from './page.module.scss';
import clsx from 'clsx';

export default function HomePage(): ReactNode {
  return (
    <div className={clsx(styles.root, 'Homepage-root')}>
      <div>Placeholder Carousel</div>
      <div>Placeholder List</div>
    </div>
  );
}
