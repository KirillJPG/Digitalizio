import { useQuery } from "@tanstack/react-query";
import { imageQueries } from "./image.queries";
import axiosInstance from "@/shared/api/api-instance";

export function useGetImage(path:string){
    const {error,isLoading,data} = useQuery({
        queryKey:imageQueries.get(),
        queryFn:async ()=>{
            const data =await axiosInstance.get("/statics/"+path,{headers:{"Content-Type":"image/jpeg"},responseType:"blob"})
            const image = URL.createObjectURL(data.data)
            return image
        }
    })
    return {error,isLoading,data}
}