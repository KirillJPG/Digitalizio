import styles from './ProfilePage.module.scss'
import { ProfileInfo } from '../../../widgets/ProfileInfo'
import { useGuard } from '@/entities/User/api';

export default function ProfilePage() {
    useGuard(true)
    return <div className={styles.profilePage}>
        <ProfileInfo/>
    </div>;
}   