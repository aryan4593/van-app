import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
import { OrbitProgress } from "react-loading-indicators"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    const activeStyles = {
        fontWeight : "bold",
        textDecoration : "underline",
        color : "#161616"
    }
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if(!currentVan){
        return (
            <div className="loading-bar-container">
                <OrbitProgress color="#32cd32" size="medium" text="" textColor="" className="loading-bar" />
            </div>
        )
    }
    return (
        <section>
            {/* <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link> */}

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

            <Outlet/>
            </div>

        </section>
    )
}