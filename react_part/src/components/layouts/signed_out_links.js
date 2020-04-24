import React from 'react'
import {NavLink} from 'react-router-dom'

const Signed_out_links=()=>{
    return(
        <ul className="right">
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li><NavLink to='/signin'>Log in</NavLink></li>

        </ul>
    )
}

export default Signed_out_links