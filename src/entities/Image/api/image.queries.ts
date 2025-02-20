export const imageQueries = {
    all:()=>["img"],
    get:()=>[...imageQueries.all(),"get"]
}