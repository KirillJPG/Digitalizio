import { Link } from "react-router"
import styles from "./GameCard.module.scss"
import { Game } from "./Games"

export function GameCard({ game }: { game: Game  }) {
    return (
        <Link to={game.link} className={styles.gameCard}>
            <div className={styles.blur}></div>
            <img className={styles.gameImage} src={game.image} alt={game.title} />
            <div className={styles.gameInfo}>
                <div className={styles.gameTitle}>{game.title}</div>
                <div className={styles.gameDescription}>{game.description}</div>
            </div>
        </Link>
    )
}

