import { useKenoCreateBet, useKenoStore } from "@/entities/Keno";
import styles from "./KenoForm.module.scss";
import { useForm } from "react-hook-form";
import { Button, InputField } from "@/shared/ui";

interface KenoFormFields{
    amount:number
}

export function KenoForm() {    
    const { mutate,error,isError,isPending} = useKenoCreateBet()
    const {selectedCells} = useKenoStore()
    const {register,handleSubmit,formState:{errors}} = useForm<KenoFormFields>({mode:"all"})
    const handleCreateBet = (data:KenoFormFields) => {
        mutate({betNumbers: selectedCells,amount: +data.amount})
    }

    return (
        <form onSubmit={handleSubmit(handleCreateBet)} className={styles.form}>
            <InputField type="number" placeholder="amount" name="amount" error={errors.amount} register={register} options={{max:{value:1000000,message:"Max amount is 1000000"},min:{value:1,message:"Min amount is 1"}}} />
            <Button disabled={isPending}>Create Bet</Button>
            {isError && <div className={styles.error}>{error?.message}</div>}
        </form>
    );
}


