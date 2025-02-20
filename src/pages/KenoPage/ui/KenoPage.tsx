import { Keno } from '@/widgets/Keno';
import styles from './KenoPage.module.scss';
import { useGuard } from '@/entities/User/api';

export default function KenoPage() {
    useGuard(true)
    return (
        <div className={styles.kenoPage}>
            <Keno />
        </div>
    );
}