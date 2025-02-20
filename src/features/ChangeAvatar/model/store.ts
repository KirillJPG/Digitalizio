import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type Store = {  
    x:number,
    y:number,
    width:number,
    height:number
    image?:File,
    preview?:string
}

type Actions = {
    setX:(x:number)=>void,
    setY:(Y:number)=>void,
    setW:(W:number)=>void,
    setH:(x:number)=>void,
    setImage:(file:File)=>void,
    setPreview:(preview:string) => void,
    clear:()=>void
}

export const storeEditor = create<Store & Actions>()(immer(set => ({
    x:0,
    y:0,
    width:0,
    height:0,
    preview:"",
    setX:(x)=>{
        set(state=>{
            if (x >= 0 && x<=600 && x<= 560-state.width){
                state.x = x
            }
        })
    },
    setY:(y)=>{
        set(state=>{
            if (y>=0 && y<=600 && y<= 560-state.height){
                state.y = y
            }
        })
    },
    setW:(w)=>{
        set(state=>{
            if (w>=0 && w<=600 && w<= 560-state.x){
                state.width = w
            }
        })
    },
    setH:(h)=>{
        set(state=>{
            if (h>=0 && h<=600 && h<= 560-state.y){
                state.height = h 
            }
        })
    },
    setImage:(img)=>{
        set(state=>{
            state.image = img
        })
    },
    setPreview:(preview)=>{
        set(state=>{
            state.preview = preview
        })
    },
    clear:()=>{
        set(state=>{
            state.preview = undefined
            state.image = undefined
        }) 
    }
})))