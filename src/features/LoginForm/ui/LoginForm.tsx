import { InputField } from '@/shared/ui/Form/InputField/InputField';
import { loginFields } from '../model/LoginFields';
import styles from './LoginForm.module.scss';
import { Button, Spinner } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { LoginDto } from '@/entities/User/api/dto/login-dto';
import { useSignIn } from '@/entities/User/api';



export function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginDto>();
    const {mutate, isPending, error} = useSignIn()
    const onSubmit = (data: LoginDto) => {
        mutate(data)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.title}>Login</div>
                {loginFields.map((field) => (
                    <InputField error={errors[field.name]} register={register} key={field.name} {...field} />
                ))}
                <Button disabled={isPending} type="submit">{isPending ? <Spinner size='small' /> : 'Login'}</Button>
                <span className={styles.register}>Don't have an account? <Link to={RoutePath.register}>Register</Link></span>
                <div className={styles.error}>{error?.message}</div>
            </form>
        </div>
    );
}; 