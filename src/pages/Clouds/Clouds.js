import React, { Component } from "react";
import "./Clouds.css"
import Gallery from "../Gallery";
import Typist from "react-typist";
import { NavLink } from 'react-router-dom';



class One extends Component {

  render() {

    return (
      <div >

       
          <img className="One" src={this.props.images[0].src} />

  
      </div>

    )
  }
}
export default One;
