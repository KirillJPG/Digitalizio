

export function mathX(lenght:number,x:number){
    if ( x == 0) return 0 
    const value = (70 * (lenght / 10)) / (((lenght - x ) ** 2) + 1)
    return Math.floor(value*10)/10    
}

