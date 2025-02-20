import { useLogout } from "@/entities/User/api"
import { Button } from "@/shared/ui"
import LogOutIcon from '@public/logout.svg?react'
import styles from './Logout.module.scss'

export function Logout() {
    const {mutate, isPending, error} = useLogout()
    return (
        <Button disabled={isPending} className={styles.logout} variant="primary" onClick={() => mutate()}><LogOutIcon width={25}/></Button>
    )
}