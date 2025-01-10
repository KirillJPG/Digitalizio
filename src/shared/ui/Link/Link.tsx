import { NavLink, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import styles from './Link.module.scss';
import clsx from 'clsx';

interface LinkProps extends RouterLinkProps {
}

export function UiLink  ({ ...props } : LinkProps) {
    return (
        <NavLink
            {...props}
            className={({isActive})=>clsx(styles.link,isActive && styles.active)}
        />

    );
}; 