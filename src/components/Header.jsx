import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  // const styles = {
  //   fontWeight: bold,
  //   textDecoration: underline,
  //   color: `#161616`,
  // };
  return (
    <header>
      <nav>
        {/* <Link to="./">#VANLIFE</Link>
          <Link to="./host">Host</Link>
          <Link to="./About">About</Link>
          <Link to="./Vans">Vans</Link> */}

        {/* using navlink instead of link  */}

        <Link className="site-logo" to="/">#VANLIFE</Link>

        <NavLink 
          to="./host"
          className={({isActive}) => isActive ? "active-link" : null}
          >
            
            Host
        </NavLink>
        <NavLink 
            className={({isActive}) => isActive ? "active-link" : null}
            to="./About">
            
            About
        </NavLink>
        <NavLink 
            className={({isActive}) => isActive ? "active-link" : null}
          to="./Vans">
            
            Vans
        </NavLink>
      </nav>
    </header>
  );
}
