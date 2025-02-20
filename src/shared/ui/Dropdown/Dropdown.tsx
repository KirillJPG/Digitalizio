import { ReactNode } from 'react';
import styles from './Dropdown.module.scss';
import clsx from 'clsx';

export function Dropdown({children,isOpen}:{children:ReactNode | ReactNode[],isOpen:boolean}) {
  return <div className={clsx(styles.dropdown,isOpen && styles.open)}>
    {isOpen && children}
  </div>;
}
