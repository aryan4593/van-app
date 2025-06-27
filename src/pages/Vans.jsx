import React ,{Suspense} from "react"
import { Link, 
        useSearchParams,
        useLoaderData ,
        Await,
        // defer no need
    } from "react-router-dom"
import {getVans} from './../api.js';
import LoadingComp from './../components/LoadingComp.jsx';

export function loader(){
    return {vans:getVans()}
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")
    // console.log(typeFilter);
    
    const dataPromise =useLoaderData();
    // console.log(dataPromise);

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }


    function renderVanElements(vans){
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


        return(
            <>
            <div className="van-list-filter-buttons">
                <button 
                    className={`van-type simple ${typeFilter === 'simple' ? 'selected' :null}`}
                    // onClick={()=>setSearchParams({type:"simple"})}
                    onClick={() => handleFilterChange("type", "simple")}

                    >
                    Simple
                </button>
                <button 
                    className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' :null}`}
                    // onClick={()=>setSearchParams({type:"rugged"})}
                    onClick={() => handleFilterChange("type", "rugged")}

                    >
                    Rugged
                </button>
                <button 
                    className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' :null}`}
                    onClick={() => handleFilterChange("type", "luxury")}
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
        </>
        )

    }
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <Suspense fallback={<LoadingComp/>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>
        </div>
    )
}