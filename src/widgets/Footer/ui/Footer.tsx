import { Logo } from '@/shared/ui';
import styles from './Footer.module.scss';
import { Link } from 'react-router';
import IncIcon from '@public/inc.svg?react';
import TwitIcon from '@public/twitter.svg?react';
import InstaIcon from '@public/instagram.svg?react';


interface FooterLink {
    title: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerSections: FooterSection[] = [
    {
        title: 'Home',
        links: [
            { title: 'Benefits', href: '#' },
            { title: 'Our Testimonials', href: '#' },
            { title: 'Partners', href: '#' }
        ]
    },
    {
        title: 'Services',
        links: [
            { title: 'Web Design', href: '#' },
            { title: 'Website Development', href: '#' },
            { title: 'App Development', href: '#' },
            { title: 'Digital Marketing', href: '#' }
        ]
    },
    {
        title: 'Projects',
        links: [
            { title: 'ABC Tech Solutions', href: '#' },
            { title: 'GreenEarth Eco Store', href: '#' },
            { title: 'HealthTech Innovations', href: '#' },
            { title: 'GlobalTech Solutions', href: '#' },
            { title: 'TechGuru Inc.', href: '#' }
        ]
    },
    {
        title: 'About Us',
        links: [
            { title: 'Our Team', href: '#' },
            { title: 'Achievements', href: '#' },   
            { title: 'Awards', href: '#' },

        ]
    },
    {
        title: 'Contact',
        links: [
            { title: 'Careers', href: '#' },
            { title: 'Job Openings', href: '#' },
            { title: 'Benefits & Perks', href: '#' },
            { title: 'Employee Refral', href: '#' },
        ]
    },
    {
        title: 'Blogs',
        links: [
            { title: 'Our Blogs', href: '#' },
        ]
    }
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Logo />
                    <div className={styles.socials}>
                        <div className={styles.follow}>Follow Us On Social Media</div>
                        <Link to='#'className={styles.social}>
                            <IncIcon width={24} height={24}/>
                        </Link>
                        <Link to='#'className={styles.social}>
                            <TwitIcon width={24} height={24}/>
                        </Link>
                        <Link to='#'className={styles.social}>
                            <InstaIcon width={24} height={24}/>
                        </Link>
                    </div>
                </div>
                <div className={styles.content}>
                    {footerSections.map((section) => <FooterSection key={section.title} {...section} />)}
                </div>
                <div className={styles.rights}>
                    <div className={styles.right}>@2023 Digitax. All Rights Reserved.</div>
                    <div className={styles.right}>Version 1.0</div>
                    <div className={styles.rightLinks}>
                        <Link to='#' className={styles.right}>Privacy Policy</Link>
                        <Link to='#' className={styles.right}>Terms & Conditions</Link>
                        <Link to='#' className={styles.right}>Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 

function FooterSection({title, links}: FooterSection) {
    return (
        <div className={styles.section}>
            <div className={styles.titleSection}>{title}</div>
            <div className={styles.linksSection}>{links.map((link) => <Link key={link.title} className={styles.linkSection} to={link.href}>{link.title}</Link>)}</div>
        </div>
    );
}
