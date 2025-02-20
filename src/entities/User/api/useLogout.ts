import axiosInstance from "@/shared/api/api-instance"
import { RoutePath } from "@/shared/const/router"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { userQueries } from "./user.queries"

export function useLogout() {
    const navigate = useNavigate()
    const client = useQueryClient()
    const {mutate, isPending, error} = useMutation({
        mutationFn: () => axiosInstance.post("/auth/signout"),
        onSuccess: () => {
            navigate(RoutePath.main)
            client.invalidateQueries({queryKey: userQueries.session()})
        }
    })

    return {
        mutate,
        isPending,
        error
    }
}