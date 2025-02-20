import { RefObject, useEffect, useRef } from "react"
import styles from "./Canvas.module.scss"
import { storeEditor } from "../model/store"
import { DrawImage, resize } from "../lib/Draw"
import { Pick } from "./Pick"

export function Canvas({canvas}:{canvas:RefObject<HTMLCanvasElement>}){
    const {preview,setW,setH,setX,setY,x,y,width,height} = storeEditor()
    useEffect(()=>{
        if (canvas.current && preview){
            const ctx = canvas.current.getContext("2d")!
            resize(ctx)
            DrawImage(ctx,preview)
        }
    },[preview,canvas])

    return (
        <div className={styles.editor}>
            <div className={styles.visible} style={{left:x+"px",top:y+"px",right:width+"px",bottom:height+"px"}}></div>
            <canvas ref={canvas} className={styles.canvas}></canvas>
            <Pick setX={setX} setY={setY} l={x} t={y}/>
            <Pick setX={setW} setY={setY} r={width} t={y}/>
            <Pick setX={setX} setY={setH} l={x} b={height}/>
            <Pick setX={setW} setY={setH} r={width} b={height}/>
        </div>
    )
}