import { useGuard } from "@/entities/User/api";
import { Games } from "@/widgets/Games";
import styles from "./HomePage.module.scss"

export default function HomePage() {
    useGuard(true)
    return (
        <div className={styles.home}>
            <Games/>
        </div>
    );
}
