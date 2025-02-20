import { useQuery } from "@tanstack/react-query"
import { kenoQueries } from "./keno.queries"
import axiosInstance from "@/shared/api/api-instance"
import { useKenoStore } from ".."

interface win{
    keno:{winners:number[]}
}
export const useGetWins = () => {
    const {setWins} = useKenoStore()    
    const {data, isLoading, error} = useQuery({
        queryKey: kenoQueries.getResult(),
        queryFn: async () => {
            const response = await axiosInstance.get<win>("keno/get-result")
            setWins(response.data.keno.winners)
            return response.data
        },
        retry:false,
        refetchOnWindowFocus:false
    })
    return {
        data,
        isLoading,
        error
    }
}