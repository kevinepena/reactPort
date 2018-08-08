import React, { Component } from "react";
import "./Gallery.css"


class Gallery extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const works = [{ img: "assets/pics/work/work1.png", link: "https://freenica.herokuapp.com" }, { img: "assets/pics/work/work2.png", link: "https://auth1-81f49.firebaseapp.com/" }, { img: "assets/pics/work/work3.png", link: "https://kevinepena.github.io/wordGuessGame/" }, { img: "assets/pics/work/work4.png", link: "" }, { img: "assets/pics/work/work5.png", link: "" }]

        return (
            <div className={this.props.open ? "fixed blur" : "fixed"} style={{ height: ((this.props.winWidth > 768) ? "100vh" : "") }}>

                <h1 id="list-item-3" style={{ fontFamily: 'Raleway', }}> Gallery </h1>
                <div className="gallery" style={{ width: ((this.props.winWidth > 768) ? "2200px" : ""), marginBottom: "50px" }}>

                    {works.map((image, index) => (
                        <div key={index} className="frame" style={{ display: ((this.props.winWidth > 768) ? "inline" : ""), margin: ((this.props.winWidth > 768) ? "40px" : "40px auto"), }} >
                            <a href={image.link} target="_blank">
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
