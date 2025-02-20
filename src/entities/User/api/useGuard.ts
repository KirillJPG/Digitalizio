import { RoutePath } from "@/shared/const/router"
import { useNavigate } from "react-router"
import { useSession } from "./useSession"
import { useEffect } from "react"

export const useGuard = (forAuth:boolean) => {
    const {isAuth} = useSession()
    const navigate = useNavigate()
    useEffect(() => {
        if (forAuth !== isAuth) {
            if (isAuth) navigate(RoutePath.home)
            else navigate(RoutePath.main)
        }
    }, [isAuth, forAuth, navigate])
}