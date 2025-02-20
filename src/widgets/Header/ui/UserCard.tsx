import { useGetProfile } from '@/entities/User/api'
import styles from './UserCard.module.scss'
import { Logout } from '@/features/Logout/Logout'
import { RoutePath } from '@/shared/const/router'
import { Dropdown, DropdownAction, UiLink } from '@/shared/ui'
import Avatar  from '@public/profile.svg?react'
import { useState } from 'react'
import { useGetImage } from '@/entities/Image'

export function UserCard() {
    const {user}    = useGetProfile()
    const {data:avatar} = useGetImage(user?.avatar!)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    if (!user) return null
    return (
        <div className={styles.userCard}>
            {avatar ? <img src={avatar} className={styles.avatar} onClick={()=>setIsDropdownOpen(e=>!e)}/> : <Avatar className={styles.avatar} onClick={()=>setIsDropdownOpen(e=>!e)}/>}
            <Dropdown isOpen={isDropdownOpen}>
                <DropdownAction>
                    <UiLink to={RoutePath.profile}>Profile</UiLink>
                </DropdownAction>
                <DropdownAction>
                    <Logout/>
                </DropdownAction>
            </Dropdown>
        </div>
    )
}