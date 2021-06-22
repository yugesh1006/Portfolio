import React from 'react';
import "./navbar.css";
import logo from "../../img/Group.png";

const Navbar = ({toggled,onClick}) => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <div onClick={onClick} className={`toggle_button ${toggled ? 'night' :''}`}>
                <div className="notch"/>
                <div className="cloud_container">
                    <div className="cloud sm"/>
                    <div className="cloud sm"/>
                    <div className="cloud md"/>
                    <div className="cloud lg"/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;