import React, { Component } from "react";
import Typist from 'react-typist';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Nav.css";


const Nav = props => {
    const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0;
    const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0;

    return (



        <div className="nav links" style={{ backgroundColor: (!props.active) ? "" : "rgba(255, 255, 255, 0.5)" }}
        >


            <Link className="navbar-brand" to="section" spy={true} smooth={true} duration={500} offset={-200} activeClass="active" containerId="containerElement" onSetActive={this.handleSetInactive} ignoreCancelEvents={true}>
                <Typist
                    className="logospot"
                    cursor={{ show: false }}>
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
  
                {/* <Link className="navbar-brand link" to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                        <span><img src="assets/pics/bitmoji/contactbitmoji.png" className="popup" /></span>
                        {(props.winWidth >= 768) ? "Contact" : "."}
                    </Link>

                    <Link className="navbar-brand link" to="gallery" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                        <span><img src="assets/pics/bitmoji/gallerybitmoji.png" className="popup" /></span>
                        {(props.winWidth >= 768) ? "Gallery" : "."}
                    </Link>

                    <Link className="navbar-brand link" to="about" spy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                        <span><img src="assets/pics/bitmoji/hellobitmoji.png" className="popup" /></span>
                        {(props.winWidth >= 768) ? "About" : "."}
                    </Link> */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{ opacity: (props.active) ? "1" : "0" }} viewBox="0 0 16 16" className="cloud"><path d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" fill="#fff" transform="matrix(.77976 0 0 .78395-299.99-418.63)" /></svg>
       
        </div>




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