
import { FieldValues } from "react-hook-form";
import styles from "./InputField.module.scss"
import type { InputProps } from "@/shared/model";


export function InputField<T extends FieldValues>({register, options, name, error, ...props}: InputProps<T>) {
    return (
        <label className={styles.label}>
            <div className={styles.inputContainer}>
                <input  {...register(name, options)} {...props} className={styles.input}/>
                <span className={styles.placeholder}>{props.placeholder}</span>
            </div>
            {error && <span className={styles.error}>{error.message}</span>}
        </label>
    );
};