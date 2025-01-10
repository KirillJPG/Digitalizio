import { RoutePath } from '@/shared/const/router';
import styles from './Header.module.scss';
import { UiLink } from '@/shared/ui/';
import { Logo } from '@/shared/ui';
import { Search } from '@/features/Search';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Logo />
                <nav className={styles.nav}>
                    <UiLink to={RoutePath.main}>Главная</UiLink>
                    <UiLink to={RoutePath.about}>О сайте</UiLink>
                    <Search />
                </nav>
                
            </div>
        </header>
    );
}; 

