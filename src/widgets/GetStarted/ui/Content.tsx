import { Button } from '@/shared/ui';
import styles from './Content.module.scss';
import BgIcon from '@public/bg.svg?react';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
export function Content() {
    return (
        <div className={styles.content}>
            <BgIcon className={styles.bg}/>
            <div className={styles.title}>Digital Solutions <span>That <br /> Drive Success</span></div>
            <div className={styles.description}>At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.</div>
            <div className={styles.sideDesc}>Unlock Your Digital Potential Today</div>
            <div className={styles.buttons}>
                <Link to={RoutePath.login}><Button variant='primary' >Get Started</Button></Link>
                <Button variant='secondary'>Free Solution</Button>
            </div>
        </div>
    )
}