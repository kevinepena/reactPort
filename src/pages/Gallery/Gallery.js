import React from "react";
import { Parallax } from 'react-scroll-parallax';
import Nav from "../../components/Nav";
import "./Gallery.css"


const Gallery = (props) => (
    <div>



        <div className="fixed">
            <div className="gallery">

                {props.images.map((image, index) => (
                    
                    <img className="parallax" src={image.src} />

                ))}

            </div>
        </div>
    </div>
);

export default Gallery;
