"use client"

import { useFormState } from "react-dom"
import { login } from "@/lib/actions"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"

const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);

    const router = useRouter();

    // useEffect(() => {
    //     state?.success && router.push("/login");
    // }, [state?.success, router]);

    return(
        <div>
            <form action={formAction}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login</button>

                {state?.error}
                <Link href="/register">
                    {"Don't have an account?"} <b>Login</b>
                </Link>
            </form>
        </div>
    )
}

export default LoginForm