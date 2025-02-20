import { UseMutateFunction } from "@tanstack/react-query"
import { dataURItoBlob } from "./ToBlob"
import { AxiosError, AxiosResponse } from "axios"
import { PatchAvatar } from "@/entities/User/api/dto/patch-avatar"
import React from "react"

export async function DrawImage (ctx:CanvasRenderingContext2D,path:string){
    const image  = new Image()
    image.src = path
    image.onload = () => {
        ctx.drawImage( image ,0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.beginPath()
        ctx.fillStyle = "#00000099"
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.fill()
    }
}

export function DrawSendImage(ctx:CanvasRenderingContext2D,path:string,x:number,y:number,w:number,h:number){
    const image  = new Image()
    image.src = path
    const natW = image.naturalWidth
    const natH = image.naturalHeight
    const rateW = (600-w-x) / 600
    const rateH = (600-h-y) / 600
    const rateX = x / 600
    const rateY = y / 600
    image.onload = () => {
        ctx.beginPath()
        ctx.drawImage(image, rateX*natW, rateY*natH, natW*rateW, natH*rateH, 0, 0, 600, 600)
        ctx.closePath()
    }
}

export function SendImage(canvas:HTMLCanvasElement,mutate:UseMutateFunction<AxiosResponse<any, any>, AxiosError<unknown, any>, PatchAvatar, unknown>,setVisible:React.Dispatch<boolean>){
    const img = canvas.toDataURL("image/png",1)
    const avatar = dataURItoBlob(img)
    mutate({avatar})
    setVisible(false)
}

export function resize(ctx:CanvasRenderingContext2D){
    ctx.canvas.width = 600
    ctx.canvas.height = 600
}   