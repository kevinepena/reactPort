import React from "react";
import Menu from "../../svg/menu.svg";

import "./Nav.css";


const Nav = props => {
    return (

        <nav className="nav links" style={{ backgroundColor: (!props.active) ? "" : "rgba(255, 255, 255, 0.9)" }}
        >
            <a className={props.active ? "logospot blue dev" : "logospot white dev"}>KP</a>

            <button style={{ display: (props.active) ? "" : "none" }} className={props.open ? "cloud cloudopen" : "cloud"} onClick={props.handleOpen}>

                <img className="burger" src={Menu} alt="" />
            </button>

        </nav>

    );

};

export default Nav;