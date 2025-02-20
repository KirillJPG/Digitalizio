import { CreateBetDto } from "./dto/CreateBet"
import axiosInstance from "@/shared/api/api-instance"
import { AxiosError, AxiosResponse } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { kenoQueries } from "./keno.queries"
import { userQueries } from "@/entities/User/api"

export const useCreateBet = () => {
    const client = useQueryClient()
    const {mutate,isError,isPending, error} = useMutation({
        mutationFn: (data:CreateBetDto) => axiosInstance.post("/keno/create-bet", data),
        onSuccess: () => {
            client.invalidateQueries({queryKey: kenoQueries.getResult()})
            client.invalidateQueries({queryKey: userQueries.session()})
        },
        onError: (error:AxiosError) => {
            const response = error.response as AxiosResponse
            error.message = response.data.message as string
        }
    })

    return {
        mutate,
        isError,
        error,
        isPending
    }
}
