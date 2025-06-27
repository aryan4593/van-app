import React , {Suspense} from "react"
import { Link, useLoaderData, Await } from "react-router-dom"
import { OrbitProgress } from "react-loading-indicators"
import { getHostVans } from "../../api"
import { requiresAuth } from "../../utils"
import LoadingComp from './../../components/LoadingComp.jsx';
export async function loader({request}){
    await requiresAuth(request);
    return {vans : getHostVans()};
}

export default function HostVans() {
    const dataPromise = useLoaderData();


    function renderVanElements(vans){
            const hostVansEls = vans.map(van => (
                <Link
                    to={`/host/vans/${van.id}`}
                    key={van.id}
                    className="host-van-link-wrapper"
                >
                    <div className="host-van-single" key={van.id}>
                        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                        <div className="host-van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}/day</p>
                        </div>
                    </div>
                </Link>
            ))

            return (
                <>
                    <div className="host-vans-list">
                        <section>
                            {hostVansEls}
                        </section>
                    </div>
                </>
            )
    }



    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>

            <Suspense fallback = {<LoadingComp/>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>
        </section>
    )
}