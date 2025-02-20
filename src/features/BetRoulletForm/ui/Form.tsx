import { Button, InputField } from "@/shared/ui";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { Choose } from "../lib/choose.type";
import { fields } from "../model/Fields";
import { Radio } from "./Radio";
import { useBet } from "../api";

export interface BetForm {
    bet: number;
    choose: Choose;
}

export function Form() {
    const { mutate, isPending, isSuccess, error } = useBet()
    const {
        register, 
        handleSubmit, 
        formState: {errors, isValid}, 
        setValue,
        watch
    } = useForm<BetForm>({
        defaultValues: {
            choose: undefined,
            bet: undefined
        },
        mode: 'onChange'
    });

    const currentChoose = watch('choose');

    const onSubmit = (data: BetForm) => {
        mutate(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formTitle}>Bet Roullete</div>
            <div className={styles.radios}>
                <Radio  register={register} name="choose" setChoose={setValue} value="green" checked={currentChoose === "green"} />
                <Radio  register={register} name="choose" setChoose={setValue} value="black" checked={currentChoose === "black"} />
                <Radio  register={register} name="choose" setChoose={setValue} value="red" checked={currentChoose === "red"} />    
            </div>
            {fields.map((field) => <InputField key={field.name} register={register} {...field} error={errors[field.name]}/>)}
            <Button disabled={!isValid || isPending || !currentChoose} className={styles.formButton}>
                Bet on {currentChoose ?? "..."}
            </Button>
            <div className={styles.result}>
                {isSuccess && <div className={styles.success}>Bet created successfully</div>}
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        </form>
    );
}