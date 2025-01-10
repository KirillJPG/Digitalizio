import styles from './WorkCard.module.scss';
import { Button } from '@/shared/ui';
import ArrowIcon from '@public/go_to.svg?react';
import BgIcon from '@public/mid_bg.svg?react';
import { WorkItem } from './OurWorks';


export function WorkCard({ title, category, image, description, date}: WorkItem){
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <BgIcon className={styles.bgIcon}/>
                {image}
                <Button variant='secondary' className={styles.button}>View Projects Details  <ArrowIcon /></Button> 
            </div>
            <div className={styles.content}>
                <div className={styles.title}> {title} </div>
                <div className={styles.info}>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.date}>{date}</span>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}; 