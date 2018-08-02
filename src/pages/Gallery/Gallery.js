import React, { Component } from "react";
import "./Gallery.css"


class Gallery extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const works = [{ img: "assets/pics/work/work1.png", link: "https://freenica.herokuapp.com" }, { img: "assets/pics/work/work2.png", link: "https://auth1-81f49.firebaseapp.com/" }, { img: "assets/pics/work/work3.png", src: "https://kevinepena.github.io/wordGuessGame/" }, {img: "assets/pics/work/work4.png", src: ""}, {img:"assets/pics/work/work5.png", src: ""}]

        return (
            <div className="fixed" >

                <h1 id="list-item-3" style={{ fontFamily: 'Raleway', }}> Gallery </h1>
                <div className="gallery" style={{ width: ((this.props.winWidth > 768) ? "2080px" : "") }}>

                    {works.map((image, index) => (
                        <div key={index} className="frame" style={{ display: ((this.props.winWidth > 768) ? "inline" : ""), margin: ((this.props.winWidth > 768) ? "40px" : "40px auto"), }} >
                            <a href={image.link}  target="_blank">
                                <img className="parallax" src={image.img} />
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        )
    };

}

export default Gallery;
