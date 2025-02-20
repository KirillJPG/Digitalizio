import { useSession } from "@/entities/User/api"
import { store } from "../model/store"
import { useEffect } from "react"
import { socket } from "@/shared/api/socket"
import { BetsResponse } from "../model/Bets.interface"
import { GameStateRunning, GameStateWin, Info } from "../model/gameState.interface"

export const useHandle = () => {
    const { setX2, setX50, setX3, setRotate, setScroll, setNextGame, setLastWins, setWin, lastWins, nextGame, rotate, scroll, x2, x50, x3, win} = store()

    const {refetch,user,isAuth} = useSession()
    useEffect(()=>{
        const interval = setInterval(()=>{
            socket.emit("getNextGame")
        },1000)
        socket.on("connects",()=>{
            socket.emit("getBets")
            socket.emit("getInfo")
        })
    
        socket.on("updateBets",()=>{
            socket.emit("getBets")

        })
        socket.on("lastWins",(data:number[])=>{
            setLastWins(data)
        })
        if ( isAuth){
            socket.on(user?.email!,(data:GameStateWin)=>{
                console.log(data)
                setWin(data)
            })
        }
        socket.on("endGame",()=>{
            setX2([])
            setX50([])
            setX3([])
            setRotate(false)
            setScroll(0)
            socket.emit("lastWins")
            refetch()
        })
        socket.on("startGame",(data:GameStateRunning)=>{
            setRotate(data.status.toLocaleLowerCase() === "started")
            setScroll(data.rotate)
            refetch()
            setWin(undefined)
        })
        socket.on("bets",(data:BetsResponse)=>{
            setX2(data.x2)
            setX50(data.x50)
            setX3(data.x3)
        })
        
        socket.on("nextGame",(data:string)=>{
            const date = new Date(Date.parse(data))
            const time = Math.abs(date.getTime()-new Date(new Date().getTime()).getTime())
            setNextGame(Math.floor(time/1000))
        })

        socket.on("info",(data:Info)=>{
            setRotate(data.status.toLocaleLowerCase() === "started")
            setScroll(data.rotateRullete)
            if (data.status.toLocaleLowerCase() === "waiting") {
                setRotate(false)
                setScroll(0)
            }
        })
        
        return ()=>{
            socket.off("connects")
            socket.off("updateBets")
            socket.off("endGame")
            socket.off("bets")
            socket.off("startGame")
            socket.off("lastWins")
            socket.off("nextGame")
            socket.off("info")
            clearInterval(interval)
            if (isAuth) {
                socket.off(user?.email!)
            }
        }
    },[])

    return {lastWins,nextGame,rotate,scroll,x2,x50,x3,win,setWin}
}