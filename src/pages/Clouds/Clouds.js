import React, { Component } from "react";
import "./Clouds.css"
import Gallery from "../Gallery";
import Typist from "react-typist";
import { NavLink } from 'react-router-dom';



class One extends Component {

  render() {

    return (
      <div >

        {this.props.images.map(image => (

          <img className="One" src={image.src} />

        ))}
      </div>

    )
  }
}
export default One;
