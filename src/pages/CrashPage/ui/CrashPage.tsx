import { Crash } from '@/widgets/CrashGame';
import styles from './CrashPage.module.scss';


export default function CrashPage() {
    return (
        <div className={styles.crashPage}>
            <Crash />
        </div>
    );
}
