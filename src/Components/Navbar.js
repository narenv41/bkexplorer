import React from 'react';
import Logo from '../resources/logo.jpeg';
import { Link } from "react-router-dom";
import '../Styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" /> {/* Added "src" and "alt" attributes */}
      </div>
      <div className="rightSide"> {/* Added closing ">" */}
        <Link to="/"> Home</Link>
        <Link to="/about"> about</Link>
      </div>
    </div>
  );
}

export default Navbar;
