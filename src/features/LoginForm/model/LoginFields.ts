import { InputProps } from "@/shared/model";
import { LoginData } from "../ui/LoginForm";
import { LoginDto } from "@/entities/User/api/dto/login-dto";


export const loginFields: Omit<InputProps<LoginDto>, "register">[] = [
    {
        name: "email",
        options: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
            },
        },
        placeholder: "Email",
    },
    {
        name: "password",
        options: {
            required: "Password is required",
        },
        placeholder: "Password",
    }
]