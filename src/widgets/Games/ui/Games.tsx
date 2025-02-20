import { GameCard } from "./GameCard";
import styles from "./Games.module.scss"

export interface Game {
    id: number;
    title: string;
    image: string;
    description: string;
    link: string;
}

const games: Game[] = [
    {
        id: 1,
        title: "Roulette",
        image: "/public/games/roullete.webp",
        description: "Desk",
        link: "/roulette"
    },
    {
        id: 2,
        title: "Crash",
        image: "/public/games/crash.webp",
        description: "Game 2 description",
        link: "/crash"
    },
    {
        id: 3,
        title: "Keno",
        image: "/public/games/keno.webp",
        description: "Game 3 description",
        link: "/keno"
    }
]

export function Games() {
    return (
    <div className={styles.games}>
        <div className={styles.title}>Start <span>Playing</span></div>
        <div className={styles.gamesList}>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    </div>
    )
}

