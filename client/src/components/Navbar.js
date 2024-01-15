import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white" style={{ color: "black" }}>
      <Link to="/" className="brand-logo left" style={{ color: "black"}}>Instagram</Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/signin" style={{ color: "black" }}>
              Signin
            </Link>
          </li>
          <li>
            <Link to="/signup" style={{ color: "black" }}>
              Signup
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ color: "black" }}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/create" style={{ color: "black" }}>
              Create Post
            </Link>
          </li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
