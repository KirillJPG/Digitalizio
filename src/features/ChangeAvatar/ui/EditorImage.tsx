import React, { FormEvent, useEffect, useRef} from "react"
import styles from "./EditorImage.module.scss"
import { Button } from "@/shared/ui"
import { storeEditor } from "../model/store"
import { Canvas } from "./Canvas"
import { DrawSendImage, resize, SendImage } from "../lib/Draw"
import { useUpdateAvatar } from "@/entities/User/api"


export function EditorImage({setVisible}:{setVisible:React.Dispatch<boolean>}){

    const {setImage,setPreview,clear,image,x,y,width,height,preview} = storeEditor()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const saveCanvasRef = useRef<HTMLCanvasElement>(null)
    const {mutate} = useUpdateAvatar()

    const handleImage = (e:FormEvent<HTMLInputElement>) =>{
        if (e.currentTarget.files){
            const file = e.currentTarget.files[0]
            setImage(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    useEffect(()=>{
        if (saveCanvasRef.current){
            const ctx = saveCanvasRef.current.getContext("2d")!
            resize(ctx) 
        }
    },[saveCanvasRef])

    useEffect(()=>{
        if (saveCanvasRef.current && preview) {
            const ctx = saveCanvasRef.current.getContext("2d")!
            DrawSendImage(ctx,preview,x,y,width,height)
        }
    },[x,y,width,height])
    const handleSend = () =>{
        if (saveCanvasRef.current){
            SendImage(saveCanvasRef.current,mutate,setVisible)
        }
    }

    return(
        <div className={styles.modal} onClick={e=>{e.stopPropagation();setVisible(false)}} onMouseMove={e=>e.stopPropagation()}>
            <canvas className={styles.saveCanvas} ref={saveCanvasRef}></canvas>
            <div className={styles.menu} onClick={e=>e.stopPropagation()}>
                {image ? 
                (
                    <>
                        <Canvas canvas={canvasRef}/>
                        <div className={styles.actions}>
                            <Button onClick={()=>setVisible(false)} variant="secondary">close</Button>
                            <Button onClick={clear} variant="secondary">clear</Button>
                            <Button onClick={handleSend} >send</Button>
                        </div>
                    </>
                ) : 
                (
                    <label className={styles.label}>
                        <div className={styles.title}>Select Image</div>
                        <input name="avatar" type="file"  accept="image/png, image/jpeg" className={styles.img} onInput={e=>handleImage(e)}/>
                    </label>
                )
                }
            </div>
        </div>
    )
}