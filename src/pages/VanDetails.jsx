import React from "react";
import {Link, useParams,useLocation, useLoaderData } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators"
import { getVans } from "../api";
export async function loader({params}){
    return getVans(params.id);
}

export default function VanDetails(props){
    const van = useLoaderData();
    const location = useLocation();
    const search = location.state?.search || "";
    const type = location.state?.type || 'all';

    return(
        <>
            <Link
                to = {`..?${search}`} //.. takes back us to parent route, whichin this case is host that's why we have to use realtive
                relative="path"
                className="back-button"
            >
                <span>&larr;</span> {`Back to ${type} vans`}
            </Link>
            <div className="van-detail container">
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} alt="" />
                    <i className={`van-type ${van.type} selected`}>     
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"> <span>${van.price}</span> <span>/day</span> </p>
                    <p >{van.description}</p>
                    <button className="link-button"> Rent this van</button>
                </div>) : 
                    <div className="loading-bar-container">
                                <OrbitProgress color="#32cd32" size="medium" text="" textColor="" className="loading-bar" />
                    </div>
                }
            </div>
        </>
    )

}