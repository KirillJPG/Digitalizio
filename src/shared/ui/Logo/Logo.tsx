import styles from './Logo.module.scss';
import LogoIcon from '@public/logo.svg?react';

export function Logo() {
    return (
        <div className={styles.logo}>
            <LogoIcon className={styles.logo__icon}/>
        </div>
    );
}