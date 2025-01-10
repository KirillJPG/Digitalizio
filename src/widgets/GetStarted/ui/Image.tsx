import styles from './Image.module.scss';

export function Image() {
    return (
        <div className={styles.image}>
            <img src="/public/BigLogo.png" alt="getStarted" />
            <div className={styles.blur}></div>
        </div>
    )
}