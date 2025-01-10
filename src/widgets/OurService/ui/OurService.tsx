import WebIcon from    '@public/advan/terminal.svg?react';
import MobileDevIcon from '@public/advan/mobile.svg?react';
import CuttingIcon from      '@public/advan/cutting.svg?react';
import MarketingIcon from '@public/advan/marketing.svg?react';
import styles from './OurService.module.scss';
import { ServiceCard } from './ServiceCard';
import { ReactNode } from 'react';

export interface ServiceItem {
    title: string;
    description: string;
    icon: ReactNode;
}

const services: ServiceItem[] = [
    {
        title: 'Web Development',
        description: 'Unlock Your Online Potential In today\'s digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.',
        icon: <WebIcon />,

    },
    {
        title: 'Mobile App Development',
        description: 'Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it\'s iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.',
        icon: <MobileDevIcon />,

    },
    {
        title: 'Web Design',
        description: 'Elevate Your Brand Aesthetics Your website\'s design is a reflection of your brand\'s identity and values. DigitX\'s web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand\'s true essence.',
        icon: <CuttingIcon />,

    },
    {
        title: 'Digital Marketing',
        description: 'Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.',
        icon: <MarketingIcon />,

    }
];

export function OurService(){
    return (
    <div className={styles.advantages}>
        <div className={styles.header}>
            <div className={styles.title}>
                Our <span> Services </span>
            </div>
            <div className={styles.description}>
                Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
            </div>
        </div>
        <div className={styles.cards}>
            {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
            ))}
        </div>
    </div>
    );
}; 