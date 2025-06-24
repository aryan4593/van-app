import React from "react";
import { useParams } from "react-router-dom";
export default function VanDetails(props){
    const params = useParams();
    console.log(params);
    const [van, setVan] = React.useState(null);
    const endPoint = `/api/vans/${params.id}`
    React.useEffect(()=>{
        fetch(endPoint)
            .then(res => res.json())
                .then(data=>setVan(data.vans));
    }, [params.id])


    return(
        <>
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
                </div>) : <h2>loading....</h2>}
            </div>
        </>
    )

}