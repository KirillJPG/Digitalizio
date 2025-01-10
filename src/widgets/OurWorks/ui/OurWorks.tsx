import styles from './OurWorks.module.scss';
import OneIcon from '@public/works/one.svg?react';
import TwoIcon from '@public/works/two.svg?react';
import ThreeIcon from '@public/works/three.svg?react';
import FourIcon from '@public/works/four.svg?react';
import { ReactNode } from 'react';
import { WorkCard } from './WorkCard';

export interface WorkItem {
    title: string;
    category: string;
    image: ReactNode;
    description: string;
    date: string;
}

const works: WorkItem[] = [
    {
        title: 'Innovative E-commerce Platform',
        category: 'Web Development.',
        image: <OneIcon />,
        description: 'Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.',
        date: 'Junary 2022'
    },
    {
        title: 'Mobile App for Enhanced Fitness',
        category: 'Mobile App Development.',
        image: <TwoIcon />,
        description: 'Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.',
        date: 'March 2022'
    },
    {
        title: 'Modern Corporate Website',
        category: 'Web Design.',
        image: <ThreeIcon />,
        description: "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices. ",
        date: 'April 2022'
    },
    {  
        title: 'Digital Marketing Success Story',
        category: 'Digital Marketing.',
        image: <FourIcon />,
        description: 'Discover how our data-driven digital marketing strategies boosted a client\'s online presence, resulting in a significant increase in website traffic and leads.',
        date: 'May 2022'    
    }
];

export function OurWorks() {
    return (
        <div className={styles.works}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Our <span>Works</span>
                </div>
                <div className={styles.description}>
                    Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
                </div>
            </div>
            <div className={styles.cards}>
                {works.map((work) => (
                    <WorkCard key={work.title} {...work} />
                ))}
            </div>
        </div>
    );
}; 