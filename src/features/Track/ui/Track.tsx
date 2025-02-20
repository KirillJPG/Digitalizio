import { useEffect, useRef } from "react";
import styles from "./Track.module.scss"
import { render } from "../lib/Draw";
import clsx from "clsx";
import { useHandle } from "@/entities/Roullete";


export interface Cell {
    id: number,
    color: string
}
const cellsTrack: Cell[] = [
    { id: 1, color: 'black' },
    { id: 2, color: 'green' },
    { id: 3, color: 'black' },
    { id: 4, color: 'red' },
    { id: 5, color: 'black' },
    { id: 6, color: 'red' },
    { id: 7, color: 'black' },
    { id: 8, color: 'red' },
    { id: 9, color: 'black' },
    { id: 10, color: 'red' },
    { id: 11, color: 'black' },
    { id: 12, color: 'red' },
    { id: 13, color: 'black' },
    { id: 14, color: 'red' },
    { id: 15, color: 'black' },
    { id: 16, color: 'red' },
]
export function Track() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const {rotate,scroll,nextGame} = useHandle()
    useEffect(() => {
        if (canvasRef.current) {
            render(canvasRef.current,cellsTrack);
        }
    }, [canvasRef.current,cellsTrack]);

    useEffect(() => {
        randomCell()
    }, [scroll])

    const randomCell = () => {
        if (canvasRef.current) {
            canvasRef.current.style.setProperty('--rotate',scroll+(360*10)+"deg")
        }
    }
    return (
        <>
        <div className={styles.track}>
            <div className={clsx(styles.trackStatus,scroll && styles.waiting)}>WAITING - {nextGame}</div>
            <div className={styles.tringle}></div>
            <canvas className={clsx(styles.trackCanvas,rotate && styles.rotate)} ref={canvasRef} >Error</canvas>
        </div>
        </>
    )
}

