import { useKenoStore } from "@/entities/Keno";
import { KenoCell } from "./KenoCell";
import styles from "./KenoGrid.module.scss";
import { useGetWins } from "@/entities/Keno/api/useGetWins";

export function KenoGrid() {
    const arrayCell = Array(36).fill(0).map((_, index) => index + 1);
    const { wins } = useKenoStore();
    useGetWins()
    console.log(wins)
    return (
        <div className={styles.kenoGrid} >
            {arrayCell.map((cell, index) => (
                <KenoCell key={index} number={cell} wins={wins} />
            ))}
        </div>
    );
}