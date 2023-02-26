

import React from "react";
import "./styles1.css";
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';
export default function Nav(){
  const {user, loginWithRedirect , isAuthenticated, logout} = useAuth0();
  return(
        <div className="navbar">
          <div className="logo"></div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/calendar">Calendar</Link>
              <Link to="/cards">Cards</Link>
              <Link to="/desktop-1">Assessment</Link>
              <Link to="/analytics">Analytics</Link>
              <Link to="/community">Community</Link>
              <Link to="/blog">Blog</Link>
              {isAuthenticated &&
               ( <p className="emailid"> {user.name} </p>)}
              {
                isAuthenticated ? (
                <button className="loginb"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out
                </button>  
                ) : (  
                <button className="loginb" onClick={()=> loginWithRedirect()}>Log In</button>     
               )}            
           </ul>
        </div>
  );

}