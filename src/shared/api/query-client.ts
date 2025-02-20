import { QueryClient } from "@tanstack/react-query";
import axiosInstance from "./api-instance";

export const queryClient = new QueryClient({
    defaultOptions:{
    }
})
