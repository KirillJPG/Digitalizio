import clsx from "clsx"
import styles from "./WinsList.module.scss"
import { useHandle } from "@/entities/Roullete"

export function WinsList(){
    const {lastWins} = useHandle()

    return <div className={styles.winsList}>
        {lastWins.map((item,index)=><Win key={index} item={item}/>)}
    </div>
}

function Win({item}:{item:number}){
    let color =  ""

    switch(item){
        case 2: color = styles.black ; break;
        case 3: color = styles.red ; break;
        case 50: color = styles.green ; break;
    }
    return <div className={clsx(styles.win,color)}></div>
}
