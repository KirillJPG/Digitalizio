import { useQuery } from "@tanstack/react-query"
import {userQueries} from "./user.queries"
import axiosInstance from "@/shared/api/api-instance";
import { GetProfileDto } from "./dto/get-profile";
export const useGetProfile = () => {

    const {data, isLoading, error,refetch} = useQuery<GetProfileDto>({
        queryKey: userQueries.profile(),
        queryFn: async () => {
            const response = await axiosInstance.get<GetProfileDto>("/auth/profile");
            return response.data;
        },  

    })

    return {
        user:data,
        isLoading,
        isAuth: (!!data && !isLoading && !error) ,
        error,
        refetch
    }
}
