import { Track } from "@/features/Track"
import styles from "./Roullete.module.scss"
import { Form } from "@/features/BetRoulletForm"
import { ListBet } from "./ListBet"
import { WinsList } from "./WinsList"
import { useHandle } from "@/entities/Roullete"
import { WinWindow } from "./WinWindow"

export function Roullete() {
    const {win} = useHandle()
    return (
        <div className={styles.roullete}>
            <div className={styles.roulleteTrack}>
                {win && <WinWindow win={win} />}
                <Track />
                <WinsList />
            </div>
            <div className={styles.actions}>
                <Form />
                <div className={styles.lists}>
                    <ListBet x="green" />
                    <ListBet x="black" />
                    <ListBet x="red" />
                </div>
            </div>
        </div>
    )
}

