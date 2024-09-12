import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './page.module.scss';

export default function HomePage(): ReactNode {
  return (
    <div className={clsx(styles.root, 'Homepage-root')}>
      <div>Placeholder Carousel</div>
      <div>Placeholder List</div>
    </div>
  );
}
