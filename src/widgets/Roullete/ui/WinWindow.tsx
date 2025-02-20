import { useHandle } from "@/entities/Roullete/api/useHandle";
import styles from "./WinWindow.module.scss";
import { useEffect, useState } from "react";   
import { GameStateWin } from "@/entities/Roullete/model/gameState.interface";

export function WinWindow({win}:{win:GameStateWin}){

    const {setWin} = useHandle()
    useEffect(()=>{
        setTimeout(()=>{
            setWin(undefined)
        },7000)
    },[])
    return(
        <div className={styles.winWindow}>
            <div className={styles.win}>
                <div className={styles.title}>WIN</div>
                <div className={styles.winAmount}>{win?.win} <div className={styles.betNumber}>X{win?.betNumber}</div></div>
            </div>
        </div>
    )
}
