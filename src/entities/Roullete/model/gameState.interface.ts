export interface GameStateRunning {
    status: string
    rotate: number
    winner: number
}

export interface Info {
    winner: number,
    rotateRullete: number,
    status: string
}

export interface GameStateWaiting {
    status: string
}

export interface GameStateWin {
    amount:number
    win:number,
    betNumber:number
}
