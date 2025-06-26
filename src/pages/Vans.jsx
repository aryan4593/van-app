import React from "react"
import { Link, useSearchParams,useLoaderData } from "react-router-dom"
import { OrbitProgress } from "react-loading-indicators"
import {getVans} from './../api.js';


export function loader(){
    return getVans()
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] =  React.useState(null);
    const typeFilter = searchParams.get("type")
    // console.log(typeFilter);
    
    const data = useLoaderData();
    const vans = data;

    const displayedVans = typeFilter ? vans.filter((ele)=>ele.type === typeFilter): vans;
    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
                <Link 
                    to={`${van.id}`} key={van.id} 
                    state = {{
                            search: searchParams.toString(), 
                            type:typeFilter}}
                >
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
            </div>
    ))

    if(error){
        return<>
            There was an error: {error.message}
            </>
    }    
    
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    className={`van-type simple ${typeFilter === 'simple' ? 'selected' :null}`}
                    onClick={()=>setSearchParams({type:"simple"})}
                >
                    Simple
                </button>
                <button 
                    className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' :null}`}
                    onClick={()=>setSearchParams({type:"rugged"})}
                >
                    Rugged
                </button>
                <button 
                    className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' :null}`}
                    onClick={()=>setSearchParams({type:"luxury"})}
                >
                    luxury
                </button>
                {  typeFilter&&
                    <button 
                        className="van-type clear-filter"
                        onClick={()=>setSearchParams({})}
                    >
                        clear filter
                    </button>
                }
            </div>
            {vans.length > 0 ? 
                <div className="van-list">
                {vanElements}
            </div> : 
            null
            }
            <div className="van-list">
                {vans.length > 0 ?
                    vanElements :
                        <></>
                }
            </div>
        </div>
    )
}