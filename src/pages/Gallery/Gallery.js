import React, { Component } from "react";
import { Parallax } from 'react-scroll-parallax';
import Nav from "../../components/Nav";
import "./Gallery.css"


class Gallery extends Component {

    render() {

        return (
            <div className="fixed" >

                <h1 style={{position: "absolute", fontFamily: 'Raleway',}}> Gallery </h1>
                <div className="gallery">

                    {this.props.images.map(image => (

                        <img className="parallax" src={image.src} />

                    ))}

                </div>
            </div>
        )};

}

export default Gallery;
