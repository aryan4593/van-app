import React from "react"
import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pathname =  new URL(request.url).searchParams.get("redirectTo") || "/host";

    try {   
        const data = await loginUser({email, password});
        localStorage.setItem("loggedin", true);
    
        const response = redirect(pathname)
        response.body = true  // It's silly, but it works
        return response
        
    } catch (error) {
        return error.message
    }

    return null;
}

export default function Login() {
    const [status, setStatus] = React.useState("idle")
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form 
                method="post" 
                className="login-form" 
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}