import styles from './DropdownAction.module.scss'

export function DropdownAction({children}:{children:React.ReactNode}) {
    return <div className={styles.dropdownAction}>{children}</div>;
}