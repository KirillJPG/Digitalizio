import { useMutation, useQueryClient } from "@tanstack/react-query"
import { BetForm } from "../ui/Form"
import axiosInstance from "@/shared/api/api-instance"
import { AxiosError, AxiosResponse } from "axios"
import { userQueries } from "@/entities/User/api"

export function useBet() {
    const client = useQueryClient()
    const { mutate, isPending,isSuccess, error } = useMutation({
        mutationFn: (data:BetForm) =>axiosInstance.post("/bet/create",{amount:data.bet,betNumber:data.choose}),
        onError:(error:AxiosError)=>{
            const response = error.response as AxiosResponse
            error.message = response.data.message as string
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:userQueries.session()})
        }
    })
    return { mutate, isPending, error,isSuccess }
}