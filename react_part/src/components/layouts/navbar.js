import React from 'react'
import {Link} from 'react-router-dom'
import Signed_in_links from "./signed_in_links"
import Signed_out_links from "./signed_out_links"


const Navbar=()=>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">brand-logo</Link>
                <Signed_in_links/>
                <Signed_out_links/>
            </div>
        </nav>
    )
}

export default Navbar