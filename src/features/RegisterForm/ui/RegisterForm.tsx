import { InputField } from '@/shared/ui/Form/InputField/InputField';
import styles from './RegisterForm.module.scss';
import { Button, Spinner } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import { registerFields } from '../model/RegisterFields';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { useCreateUser } from '@/entities/User/api';
import { RegisterDto } from '@/entities/User/api/dto/register';


export function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<RegisterDto>();
    
    const {mutate, isPending, error} = useCreateUser()
    const onSubmit = (data: RegisterDto) => {
        mutate(data)
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.title}>Register</div>
                {registerFields.map((field) => (
                    <InputField disabled={isPending} error={errors[field.name]} register={register} key={field.name} {...field} />
                ))}
                <Button disabled={isPending} type="submit">{isPending ? <Spinner size='small'/> : 'Register'}</Button>
                <div className={styles.login}>Already have an account? <Link to={RoutePath.login}>Login</Link></div>
                <div className={styles.error}>{error?.message}</div>
            </form>
        </div>
    );
}; 