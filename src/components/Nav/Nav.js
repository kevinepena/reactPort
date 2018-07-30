import React, { Component } from "react";
import Typist from 'react-typist';
import "./Nav.css";
import { NavLink } from 'react-router-dom';

const Nav = props => {
    const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0;
    const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0;

    return (


    <nav style={{ opacity, borderBottomWidth }} className="links">

        <Typist
            className="logospot"
            cursor={{ show: false }}>
            <Typist.Delay ms={2500} />
            <span id="name">Kevin Peña</span>
            <Typist.Backspace count={10} delay={1500} />
            <span id="dev" >Develper</span>
            <Typist.Backspace count={8} delay={1500} />
            <span id="ent">Entrepreneur</span>
            <Typist.Backspace count={12} delay={1500} />
            <NavLink to='/' className="navbar-brand logo"><span id="name">KP: </span></NavLink>

        </Typist>
        
        <NavLink to='/about' className="navbar-brand link" >About</NavLink>
        <NavLink to='/gallery' className="navbar-brand link" >Gallery</NavLink>
        <NavLink to='/contact' className="navbar-brand link" >Contact</NavLink>

    </nav>


    );

};

export default Nav;






// <Typist  
// cursor={{ show: false }}>
//     <Typist.Delay ms={2500} />
//     <span id="name">Kevin Peña</span> 
//     <Typist.Backspace count={10} delay={1500} />
//     <span id="dev" >Develper</span>
//     <Typist.Backspace count={8} delay={1500} />
//     <span id="ent">Entrepreneur</span>
//     <Typist.Backspace count={12} delay={1500} />
//     <NavLink to='/' className="navbar-brand logo"><span id="name">KP: </span></NavLink>

// </Typist>

// {props.winWidth <= 768 ? "" : <br/> }
// <Typist cursor={{ show: false }} className = {props.winWidth <= 768 ? "links" : "mobile" }>
//     <NavLink to='/about' className = {props.winWidth <= 768 ? "link" : "mobile" }>About</NavLink>
//     {props.winWidth <= 768 ? "" : <br/> }
//     <NavLink to='/gallery' className = {props.winWidth <= 768 ? "link" : "mobile" } >Gallery</NavLink>
//     {props.winWidth <= 768 ? "" : <br/> }
//     <NavLink to='/contact' className = {props.winWidth <= 768 ? "link" : "mobile" } >Contact</NavLink>
// </Typist>