import clsx from "clsx";
import { Choose } from "../lib/choose.type";
import styles from "./Radio.module.scss";
import { BetForm } from "./Form";
import { Path, UseFormRegister, UseFormSetValue } from "react-hook-form";

export function Radio({
    value,
    name,
    register,
    checked
}: {
    value: Choose;
    setChoose: UseFormSetValue<BetForm>;
    name: Path<BetForm>;
    register: UseFormRegister<BetForm>;
    checked: boolean;
}) {
    return (
        <label 
            className={clsx(styles.radio, styles[value],checked && styles.checked)} 
            htmlFor={value}
        >
            <input 
                type="radio" 
                value={value} 
                className={styles.radioInput} 
                
                id={value}
                {...register(name)}
            />
            <span className={styles.radioLabel}>{value} </span>
        </label>
    );
}