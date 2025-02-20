import { useState } from "react"
import styles from "./ChangeAvatar.module.scss"
import { EditorImage } from "./EditorImage"
import { useGetImage } from "@/entities/Image"
import { Loader } from "@/widgets/Loader"
import clsx from "clsx"


export function ChangeAvatar({avatar}:{avatar:string}){
    const [open,setOpen] = useState(false)
    if (avatar === undefined) return ""
    const {data,error,isLoading} = useGetImage(avatar)
    return (
        <>
        <div className={styles.border} onClick={()=>setOpen(e=>!e)}>
            {(!isLoading && data) &&<img src={data ?? "/public/change_avatar.svg"} alt="avatar"  className={clsx(styles.img,data && styles.full)}/>}
            {isLoading && <Loader/>}
        </div>
        {open && <EditorImage setVisible={setOpen}/>}
        </>
    )
}   