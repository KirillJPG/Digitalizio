import { useGuard } from "@/entities/User/api";
import { LoginForm } from "@/features/LoginForm";

function LoginPage() {
    useGuard(false)
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default LoginPage;