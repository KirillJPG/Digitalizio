import { FieldError, Path, RegisterOptions } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement>{
    register:UseFormRegister<T>,
    options:RegisterOptions<T>,
    name:Path<T>,
    error?:FieldError
}
