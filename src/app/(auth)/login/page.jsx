import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/actions";
// import { login } from "@/lib/actions";

const LoginPage = () => {

    // const session = await auth();
    // console.log(session);

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <LoginForm />
        </div>
    )
}

export default LoginPage