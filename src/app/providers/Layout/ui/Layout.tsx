import { ReactNode } from 'react';
import { Header } from '@/widgets/Header';
import styles from './Layout.module.scss';
import { Footer } from '@/widgets/Footer';

interface LayoutProps {
    children: ReactNode;
}

export function Layout ({ children }: LayoutProps){
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.container}>
                <main className={styles.content}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}; 