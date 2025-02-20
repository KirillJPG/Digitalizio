import { Bets } from "../../../entities/Roullete/model/Bets.interface"
import styles from "./Bet.module.scss"
import IconCoin from "@public/coin.svg?react"
export function Bet({bet}:{bet:Bets}) {
    return (
        <div className={styles.bet}>
            <div className={styles.email}>{bet.user.email}</div>
            <div className={styles.amount}><IconCoin width={20}/>{bet.amount}</div>
        </div>
    )
}