import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return(
        <h1> <NavLink style={{textDecoration: 'none', color: 'navy'}} exact to='/'> Back to 🏠  </NavLink> </h1>
    )
}

export default Navbar;