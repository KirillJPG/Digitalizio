export interface Bets{
    betNumber:number,
    amount:number,
    user:{
        email:string,
    }
}

export interface BetsResponse{
    x2:Bets[],
    x50:Bets[],
    x3:Bets[],
}
