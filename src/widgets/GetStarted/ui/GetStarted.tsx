import { Content } from './Content';
import styles from './GetStarted.module.scss';
import { Image } from './Image';

export function GetStarted() {
    return (
        <div className={styles.getStarted}>
            <Content />
            <Image />
        </div>
    )
}