import { useMutation } from "@tanstack/react-query"
import { RegisterDto } from "./dto/register"
import axiosInstance from "@/shared/api/api-instance"
import { useNavigate } from "react-router"
import { RoutePath } from "@/shared/const/router"
import { AxiosError, AxiosResponse } from "axios"

export const useCreateUser = () => {
    const navigate = useNavigate()
    const {mutate, isPending, error} = useMutation({
        mutationFn: (data: RegisterDto) => axiosInstance.post("/auth/register", data),
        onSuccess: () => {
            navigate(RoutePath.login)
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
