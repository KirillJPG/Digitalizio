import { CrashRocket } from "@/features/CrashRocket";
import styles from './Crash.module.scss';

export function Crash() {
    return (
        <div className={styles.crash}>
            <CrashRocket />
        </div>
    );
}

