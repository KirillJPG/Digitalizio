import { useGetProfile } from '@/entities/User/api'
import styles from './ProfileInfo.module.scss'
import { Loader } from '@/widgets/Loader'
import { useEffect, useRef } from 'react'
import { ChangeAvatar } from '@/features/ChangeAvatar/ui/ChangeAvatar'

export function ProfileInfo(){
    const refLvl = useRef<HTMLDivElement>(null)
    const {user,isLoading,isAuth,error,refetch} = useGetProfile()
    useEffect(()=>{
        if(refLvl.current && user?.lvl !== undefined){
            refLvl.current.style.setProperty('--lvl',`${(360/((user.lvl+1)*500))*user.exp}deg`)
        }
    },[user])

    if(isLoading) return <Loader/>
    if(error || !isAuth || !user) return <div>{error?.message}</div>


    const {email,money,createdAt,winAmount,wins,lvl,avatar} = user

    return <div className={styles.profileInfo}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
            <div className={styles.avatar}>
                <ChangeAvatar avatar={avatar}/>
            </div>
            <div className={styles.email}>{email}</div>
            <div className={styles.from}>Created at {new Date(createdAt).toLocaleDateString()}</div>
            <div className={styles.money}>Balance: {money}$</div>
            <div className={styles.lvl} ref={refLvl}>{lvl} LVL <span className={styles.exp}>{user.exp}/{(lvl+1)*500}</span></div>


        </div>
        <div className={styles.stats}>
            <div className={styles.stats__item}>
                <div className={styles.stats__item__title}>Wins</div>
                <div className={styles.stats__item__value}>{wins}</div>
            </div>
            <div className={styles.stats__item}>
                <div className={styles.stats__item__title}>Win Amount</div>
                <div className={styles.stats__item__value}>{winAmount}</div>
            </div>
        </div>
    </div>
}