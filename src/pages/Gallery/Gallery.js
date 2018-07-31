import React from "react";
import { Parallax } from 'react-scroll-parallax';
import Nav from "../../components/Nav";
import "./Gallery.css"

const images = ["assets/pics/IMG_0388.png",
"assets/pics/IMG_9059.JPG",
"assets/pics/IMG_1162.png",
"assets/pics/IMG_4143.JPG",
"assets/pics/IMG_4271.JPG",
"assets/pics/IMG_4533.JPG",
"assets/pics/IMG_4554.JPG",
"assets/pics/IMG_5071.JPG",
"assets/pics/IMG_5090.JPG",
"assets/pics/IMG_4641.JPG",
"assets/pics/IMG_4344.JPG"]
const Gallery = (props) => (
    <div>



        <div className="fixed">
            <div className="gallery">

                {images.map(image => (
          
                    <img className="parallax" src={image.src} />

                ))}

            </div>
        </div>
    </div>
);

export default Gallery;
