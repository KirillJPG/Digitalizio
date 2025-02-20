import styles from './Spinner.module.scss';
import clsx from 'clsx';

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
}

export function Spinner({ size = 'medium' }:SpinnerProps){
    return (
        <div className={clsx(styles.spinner, styles[size])}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
    );
}; 