import { DragEvent, useState, } from "react"
import styles from "./Pick.module.scss"
import clsx from "clsx"
export function Pick({l,r,t,b,setY,setX}:{l?:number,r?:number,t?:number,b?:number,setY:(y:number)=>void,setX:(x:number)=>void}){
    
    const [y,setStartY] = useState(0)
    const [x,setStartX] = useState(0)
    const handleDrag = (e:DragEvent<HTMLDivElement>) =>{
        const parentRect = e.currentTarget.parentElement?.getBoundingClientRect()
        if (y!=0 && x !=0 && parentRect && e.clientX && e.clientY){
            if ( b !== undefined){
                setY(parentRect.bottom-e.clientY)
            }else{
                setY(e.clientY-parentRect.top)
            }
            if (l !== undefined){
                setX(e.clientX-parentRect.left)
                
            }else{
                setX(parentRect.right-e.clientX)
            }
        }
    }
    return (
        <div className={clsx(styles.pick,"droppable")} style={{left:l+"px",right:r+'px',top:t+"px",bottom:b+"px"}} onDrag={handleDrag} onDragStart={e=>{setStartX(e.clientX);setStartY(e.clientY)}} onDragEnd={()=>{setStartX(0);setStartY(0)}}></div>
    )
}