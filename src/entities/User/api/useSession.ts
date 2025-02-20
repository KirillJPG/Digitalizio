import { useQuery } from "@tanstack/react-query"
import {userQueries} from "./user.queries"
import { GetSessionDto } from "./dto/get-session";
import axiosInstance from "@/shared/api/api-instance";

export const useSession = () => {

    const {data, isLoading, error,refetch} = useQuery<GetSessionDto>({
        queryKey: userQueries.session(),
        queryFn: async () => {
            const response = await axiosInstance.get<GetSessionDto>("/auth/session");
            return response.data;
        },
        retry:false,
    })

    return {
        user:data,
        isLoading,
        isAuth: (!!data && !isLoading && !error) ,
        error,
        refetch
    }
}
