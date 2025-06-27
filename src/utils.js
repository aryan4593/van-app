import {redirect} from "react-router-dom";

export async function requiresAuth(request){
    const isLoggedIn = localStorage.getItem("loggedin");
    const pathname = new URL(request.url).pathname;

    if(!isLoggedIn){
        const response = redirect(`/login?message=You must login first.&redirectTo=${pathname}`)
        response.body = true  // It's silly, but it works
        throw response
        return null;
    }
    return null;

}