import React, { Component } from "react";
import "./Gallery.css"


class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    render() {



        return (
            <div className="fixed" >

                <h1 id="list-item-3" style={{ fontFamily: 'Raleway', }}> Gallery </h1>
                <div className="gallery">

                    {this.props.images.map((image) => (
                        <div className="frame" style={{ display: (this.props.winWidth > 768) ? "inline" : "" }} >
                            <img className="parallax" src={image.src} />
                        </div>
                    ))}

                </div>
            </div>
        )
    };

}

export default Gallery;
