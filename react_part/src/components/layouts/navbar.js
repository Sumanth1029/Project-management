import React from 'react'
import {Link} from 'react-router-dom'
import Signed_in_links from "./signed_in_links"
import Signed_out_links from "./signed_out_links"
import {connect} from 'react-redux'


const Navbar=(props)=>{
    const {auth}=props
    console.log(auth)
    const links=auth.uid ? <Signed_in_links/>:<Signed_out_links/>
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">brand-logo</Link>
                {links}
            </div>
        </nav>
    )
}
const mapStateToProps=(state)=>{
    return {
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)