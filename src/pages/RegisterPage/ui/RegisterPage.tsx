import { useGuard } from "@/entities/User/api";
import { RegisterForm } from "@/features/RegisterForm";

function RegisterPage() {
    useGuard(false)
    return (
        <div>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;