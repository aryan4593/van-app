import {redirect} from "react-router-dom";

export async function requiresAuth(){
    const isLoggedIn = localStorage.getItem("loggedin");

    if(!isLoggedIn){
        const response = redirect("/login?message=You must login first.")
        response.body = true  // It's silly, but it works
        throw response
        return null;
    }
    return null;

}