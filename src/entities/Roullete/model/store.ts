import { Bets } from "./Bets.interface"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { GameStateWin } from "./gameState.interface"
type Store = {
    x2:Bets[]
    x50:Bets[]
    x3:Bets[],
    rotate:boolean,
    scroll:number,
    nextGame:number,
    lastWins:number[],
    win?:GameStateWin
}

type Actions = {
    setX2: (bets:Bets[]) => void,
    setX50: (bets:Bets[]) => void,
    setX3: (bets:Bets[]) => void,
    setRotate: (rotate:boolean) => void,
    setScroll: (scroll:number) => void,
    setNextGame: (nextGame:number) => void,
    setLastWins: (lastWins:number[]) => void,
    setWin: (win:GameStateWin | undefined) => void
}

export const store = create<Store & Actions>()(immer(set => ({
    lastWins:[],
    x2:[],
    x50:[],
    x3:[],
    rotate:false,
    scroll:0,
    nextGame:0,
    setX2: (bets:Bets[]) => set(state=>{
        state.x2 = bets
    }),
    setX50: (bets:Bets[]) => set(state=>{
        state.x50 = bets
    }),
    setX3: (bets:Bets[]) => set(state=>{
        state.x3 = bets
    }),
    setRotate: (rotate:boolean) => set(state=>{
        state.rotate = rotate
    }),
    setScroll: (scroll:number) => set(state=>{
        state.scroll = scroll
    }),
    setNextGame: (nextGame:number) => set(state=>{
        state.nextGame = nextGame
    }),
    setLastWins: (lastWins:number[]) => set(state=>{
        state.lastWins = lastWins
    }),
    setWin: (win:GameStateWin | undefined) => set(state=>{
        state.win = win
    })

})))