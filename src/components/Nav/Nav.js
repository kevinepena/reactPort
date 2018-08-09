import React from "react";
import Typist from 'react-typist';
import { Link } from 'react-scroll'
import "./Nav.css";


const Nav = props => {
    return (



        <div className="nav links" style={{ backgroundColor: (!props.active) ? "" : "rgba(255, 255, 255, 0.5)" }}
        >


            <Link className="navbar-brand" to="section" spy={true} smooth={true} duration={500} offset={-200} activeClass="active" containerId="containerElement" onSetActive={this.handleSetInactive} ignoreCancelEvents={true}>
                <Typist
                    className={props.active ? "logospot blue" : "logospot white"}
                    cursor={{ show: false }}
                >
                    <Typist.Delay ms={props.time} />
                    <span id="name">Kevin Peña</span>
                    <Typist.Backspace count={10} delay={1500} />
                    <span id="dev" >Developer</span>
                    <Typist.Backspace count={9} delay={1500} />
                    <span id="ent">Entrepreneur</span>
                    <Typist.Backspace count={12} delay={1500} />
                    <span id="name">KP: </span>

                </Typist>
            </Link>
        </div>




    );

};

export default Nav;