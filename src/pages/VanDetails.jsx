import React, {Suspense} from "react";
import {Link, useParams,useLocation, useLoaderData, Await } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators"
import { getVans } from "../api";
import LoadingComp from './../components/LoadingComp.jsx';
export async function loader({params}){
    return { van : getVans(params.id)};
}


function getVanComp(van){
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
                 <div className="van-detail">
                        <img src={van.imageUrl} alt="" />
                    <i className={`van-type ${van.type} selected`}>     
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"> <span>${van.price}</span> <span>/day</span> </p>
                    <p >{van.description}</p>
                    <button className="link-button"> Rent this van</button>
                </div> 
            </div>
        </>
    )

}
export default function VanDetails(props){
    const dataPromise = useLoaderData();

    return(
        <>
            <Suspense fallback = {<LoadingComp/>}>
                <Await resolve={dataPromise.van}>
                    {getVanComp}
                </Await>
            </Suspense>
        </>
    )

}