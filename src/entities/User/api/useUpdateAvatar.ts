import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { PatchAvatar } from "./dto/patch-avatar"
import axiosInstance from "@/shared/api/api-instance"
import { userQueries } from "./user.queries"

export function useUpdateAvatar(){
    const queryClient = useQueryClient()

    const {mutate, isPending, error} = useMutation({
        mutationFn: (data: PatchAvatar) => axiosInstance.post("/user", data,{headers:{"Content-Type":"multipart/form-data"}}),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: userQueries.session()})
        },
        onError: (error:AxiosError) => {
            const response = error.response as AxiosResponse
            error.message = response.data.message as string
        }
    })
    return {
        mutate,
        isPending,
        error
    }
}