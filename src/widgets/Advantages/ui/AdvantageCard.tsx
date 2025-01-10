import { ReactNode } from 'react';
import style from "./AdvantageCard.module.scss"
import { Button } from '@/shared/ui';
import ArrowRightIcon  from '@public/go_to.svg?react';
import BgIcon from '@public/mini_bg.svg?react';

export interface AdvantageCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function AdvantageCard({icon, title, description}:AdvantageCardProps){
    return (
        <div className={style.advantageCard}>
            <Icon icon={icon} />
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>

            <Button variant='secondary'>Learn More <ArrowRightIcon className={style.arrowIcon} /></Button>
        </div>
    );
}; 

function Icon({icon}:{icon:ReactNode}){
    return (
    <div className={style.icon}>
        <BgIcon className={style.bgIcon} />
        {icon}
    </div>
    )
}
