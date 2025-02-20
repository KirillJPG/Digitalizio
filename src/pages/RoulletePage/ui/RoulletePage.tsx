
import { Roullete } from "@/widgets/Roullete"
import styles from "./RoulletePage.module.scss"
import { useGuard } from "@/entities/User/api"

export default function RoulletePage() {
    useGuard(true)
    return (
        <div className={styles.roulletePage}>
            <Roullete />
        </div>
    )
}