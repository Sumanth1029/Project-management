import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import AdminSignIn from "./adminSignIn"
var links
const Navbar = (props) => {
  const { auth, profile } = props;
  // links = auth.uid ? <AdminSignIn profile={profile} /> : <SignedOutLinks />;

  if (auth.uid){
    if(auth.email==="sumanthhegde1029@gmail.com"){
      links=<AdminSignIn profile={profile}/>
    }else links=<SignedInLinks profile={profile}/>
  }else links=<SignedOutLinks/>


  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo left">posThat</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
