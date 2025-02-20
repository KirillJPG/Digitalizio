import { useKenoStore } from "@/entities/Keno"
import styles from "./XList.module.scss"
import { mathX } from "../lib/mathX"

export function XList(){
    const {selectedCells} = useKenoStore()
    return <div className={styles.xList}>
        <div className={styles.item}>0 - X0</div>
        {selectedCells.map((x,id)=>{
            return <div className={styles.item}>{id+1} - X{mathX(selectedCells.length,id+1)}</div>
        })}
    </div>
}
