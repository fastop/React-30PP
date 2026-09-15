import React, {useState, useEffect} from 'react';
import NavItem from "./NavItem";
import { NavStyle } from './NavStyle';  


/* FAILED PROJECT  */

export default function ResponsiveNav() {

    const [showElement, setShowElement] = useState({
        navBar:true,
        hamburguerIcon:false,
        closeIcon:false,
        navOpened:false
    });



  return (
        <NavStyle  className="navbar bg-primary text-light  ">
         
                <div className="navbar-logo">
                    <a href="#" className="navbar-logo">
                        Norberto BM
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className='navbar-items'>
                        <NavItem text={"Home"} active="active"/>
                        <NavItem text={"About"} />
                        <NavItem text={"Contact"} />
                    </ul>

                </div>
        </NavStyle>      
  );
}
