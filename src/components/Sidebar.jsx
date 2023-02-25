

import React from "react";
import "./styles1.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">MindShine</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/calendar">Calendar</Link>
              <Link to="/cards">Cards</Link>
              <Link to="/desktop-1">Assessment</Link>
              <Link to="/analytics">Analytics</Link>
              <Link to="/community">Community</Link>
              <Link to="/blog">Blog</Link>            
           </ul>
        </div>
  );

}