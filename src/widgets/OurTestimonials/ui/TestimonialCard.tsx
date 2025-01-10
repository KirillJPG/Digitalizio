
import { TestimonialItem } from './OurTestimonials';
import styles from './TestimonialCard.module.scss';
import TwitterIcon from '@public/twitter.svg?react';


export function TestimonialCard({text, avatar, name, profession}: TestimonialItem ) {
    return (
        <div className={styles.card}>
            <div className={styles.comment}>
                <div className={styles.twitter}>
                    <TwitterIcon />
                </div>
                <div className={styles.text}>{text}</div>
            </div>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.profession}>{profession}</div>
                </div>
            </div>
        </div>
    );
}; 