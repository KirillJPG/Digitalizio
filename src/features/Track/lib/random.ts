export const random = (min:number,max:number,floor:boolean=true) => {
    if (!floor) return (Math.random() * (max - min + 1) )+ min;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}