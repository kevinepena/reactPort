import React, { Component } from "react";
import Typist from 'react-typist';
import "./Section.css";


const Section = props => (

    <nav id="mainnav">



        <a  className="homelink"><span><img src="assets/pics/hellobitmoji.png" className="popup" /></span>About</a>
        <br />
        <a className="homelink"><span><img src="assets/pics/gallerybitmoji.png" className="popup" /></span>Gallery</a>
        <br />
        <a className="homelink" ><span><img src="assets/pics/contactbitmoji.png" className="popup" /></span>Contact</a>


    </nav>



);

export default Section;