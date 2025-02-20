import { RegisterDto } from "@/entities/User/api/dto/register";
import { InputProps } from "@/shared/model";


export const registerFields: Omit<InputProps<RegisterDto>, "register">[] = [
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
            minLength:{ value:12, message:"Password must be at least 12 characters long"},
            maxLength:{ value:24, message:"Password must be at most 24 characters long"},
        },
        placeholder: "Password",
    }
]