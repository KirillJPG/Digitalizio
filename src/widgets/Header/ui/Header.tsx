import { RoutePath } from '@/shared/const/router';
import styles from './Header.module.scss';
import { Button, IncText, UiLink } from '@/shared/ui/';
import { Logo } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { UserCard } from './UserCard';
import clsx from 'clsx';
import { useSession } from '@/entities/User/api';
import MoneyIcon from "@public/coin.svg?react"

export const Header = () => {
    const {isAuth,isLoading,user} = useSession()
    return (
        <header className={clsx(styles.header)}>
            <div className={styles.inner}>
                <div className={clsx(styles.logo,isLoading ? styles.loading : styles.loaded)}>
                    <Logo />
                </div>
                <nav className={styles.nav}>
                    <UiLink to={isAuth ? RoutePath.home : RoutePath.main}>Главная</UiLink>
                    <UiLink to={RoutePath.about}>О сайте</UiLink>
                    {!isAuth && <Link to={RoutePath.login}><Button variant='primary' > Get Started</Button></Link>}
                    {isAuth && <div className={styles.money}><MoneyIcon width={24} height={24}/> <IncText numbers={user?.money ?? 0} /></div>}
                    {isAuth && <UserCard />}
                </nav>
            </div>
        </header>
    );
}; 

