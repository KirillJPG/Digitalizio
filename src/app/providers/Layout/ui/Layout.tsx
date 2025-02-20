import { lazy, ReactNode, Suspense } from 'react';
import { Header } from '@/widgets/Header';
import styles from './Layout.module.scss';


const Footer = lazy(() => import('@widgets/Footer/'));

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
            <Suspense >
                <Footer />
            </Suspense>
        </div>
    );
}; 