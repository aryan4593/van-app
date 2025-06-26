import React from "react"
import { useParams, Link, Outlet, NavLink, useLoaderData} from "react-router-dom"
import { OrbitProgress } from "react-loading-indicators"
import { getHostVans } from "../../api"
import { requiresAuth } from "../../utils"

export async function loader({params}){
    await requiresAuth();
    return getHostVans(params.id);
}

export default function HostVanDetail() {
    const activeStyles = {
        fontWeight : "bold",
        textDecoration : "underline",
        color : "#161616"
    }
    const currentVan = useLoaderData();

    return (
        <section>

            <Link
                to = ".." //.. takes back us to parent route, whichin this case is host that's why we have to use realtive
                relative="path"
                className="back-button"
            >
               <span>&larr;</span> Back to all vans
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Details</NavLink>
                    <NavLink
                        to="Pricing"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Pricing</NavLink>
                    <NavLink
                        to="Photos"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Photos</NavLink>
                </nav>


            <Outlet context = {{currentVan: currentVan}}/>
            </div>

        </section>
    )
}