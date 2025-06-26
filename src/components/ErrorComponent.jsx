import React from "react";
import {useRouteError, Link} from "react-router-dom"

export default function ErrorComponent(){
    const error = useRouteError();
    console.log(error);
    return(
        <>
            <h1>There was an error!!!</h1>
            <h2>{error.message}</h2>
            <pre>{error.status} - {error.statusText}</pre>

            <Link to="./">Go back to home page</Link>
        </>
    )
}