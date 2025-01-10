import { ReactNode } from "react";
import { ServiceItem } from "./OurService";
import styles from './ServiceCard.module.scss';
import BgIcon from "@public/mid_bg.svg?react"
import { Button } from "@/shared/ui/Button/Button";
import ArrowIcon from "@public/go_to.svg?react"
export function ServiceCard ({title, description, icon}: ServiceItem) {
    return (
    <div className={styles.card}>
        <BgIcon className={styles.bgIcon}/>
        <Icon icon={icon}/>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Button variant="secondary">Learn More <ArrowIcon /></Button>
    </div>
    );
}; 

function Icon({icon}: {icon: ReactNode}) {
    return (
        <div className={styles.preview}>
            <div className={styles.icon}>
                <div className={styles.icon}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};
