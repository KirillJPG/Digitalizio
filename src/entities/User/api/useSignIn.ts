import axiosInstance from "@/shared/api/api-instance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoginDto } from "./dto/login-dto"
import { userQueries } from "./user.queries"
import { AxiosResponse } from "axios"
import { AxiosError } from "axios"
import { useNavigate } from "react-router"
import { RoutePath } from "@/shared/const/router"

export const useSignIn = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate, isPending, error} = useMutation({
        mutationFn: (data: LoginDto) => axiosInstance.post("/auth/login", data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: userQueries.session()})
            navigate(RoutePath.home)
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


