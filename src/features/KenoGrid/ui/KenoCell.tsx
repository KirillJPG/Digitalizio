import { useKenoStore } from "@/entities/Keno";
import styles from "./KenoCell.module.scss";
import clsx from "clsx";

export function KenoCell({ number,  wins }: { number: number,  wins?: number[] }) {
    const { selectedCells, setSelectedCell } = useKenoStore();
    return (
        <div className={clsx(styles.kenoCell, selectedCells.includes(number) && styles.selected, wins?.includes(number) && styles.win)}  onClick={() => setSelectedCell(number)}>
            <div className={styles.kenoCellNumber}>{number}</div>
        </div>
    );
}