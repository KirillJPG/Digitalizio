import styles from "./ListBet.module.scss"
import { ColorBet } from "../model/ColorBet";
import { Bet } from "./Bet";
import { useHandle } from "@/entities/Roullete";
import { Bets } from "@/entities/Roullete/model/Bets.interface";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IncText } from "@/shared/ui";



export function ListBet({x}:{x:ColorBet}) {
    const {x2,x50,x3,lastWins} = useHandle()
    const [allCash, setAllCash] = useState(0)
    let styleList:ColorBet = "green";
    let list:Bets[] = []
    const lastWin = lastWins[lastWins.length-1]
    useEffect(()=>{
        setAllCash(0)
        list.forEach(item=>{
            setAllCash(prev=>prev+item.amount)
        })
    },[list])

    switch(lastWin){
        case 2: styleList = "green"; break;
        case 50: styleList = "black"; break;
        case 3: styleList = "red"; break;
    }
    switch(x){
        case "green": list = x50; break;
        case "black": list = x2; break;
        case "red": list = x3; break;
    }

    return (
        <div className={clsx(styles.listBet,styles[x], styleList == x && styles.win)}>
            <div className={styles.header}>
                <div className={styles.title}>{x.toLocaleUpperCase()}</div>
                <IncText numbers={allCash} className={styles.cash}/>
            </div>
            {list.length === 0 && <div className={styles.empty}>No bets</div> }
            {list.map((item)=>{
                return <Bet key={item.user.email} bet={item}/>
            })}
        </div>
    )
}