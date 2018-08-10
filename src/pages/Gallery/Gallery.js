import React, { Component } from "react";
import "./Gallery.css"


class Gallery extends Component {

    render() {

        const works = [{ img: "assets/pics/work/work1.png", link: "https://freenica.herokuapp.com", tech: ["Node", "Express", "React", "MongoDB", "Reactstrap", "Firebase", "Auth0"], about: "App for displaying trending information", list: ["Intergrated Auth0 with different level scopes", "Implemented Twitter API and socket.io to stream live tweets", "Full CRUD capabilities with MongoDB", "Uses Cloudinary API to host pictures", "Integrated Firebase database for extra secure storage", "Mobile Responsive Layout"] }, { img: "assets/pics/work/work2.png", link: "https://auth1-81f49.firebaseapp.com/", tech: ["Firebase", "Javascript", "jQuery"], about: "Platform for viewing astrology", list: ["Uses firebase authentication", "Integrated astrology and NASA API to provide user with astrology information"] }, { img: "assets/pics/work/work3.png", link: "https://kevinepena.github.io/wordGuessGame/", tech: ["Javascript", "CSS", "jQuery"], about: "Game to test Javascript code efficiency", list: [] },
            // { img: "assets/pics/work/work4.png", link: "", tech: [], about: "" }, { img: "assets/pics/work/work5.png", link: [], tech: [], about: "" }
        ]

        return (
            <div className={this.props.open ? "fixed blur" : "fixed"} style={{ height: ((this.props.winWidth > 768) ? "100vh" : "") }}>

                <h1 id="list-item-3" style={{ fontFamily: 'Raleway', }}> Gallery </h1>
                <div className="gallery" style={{ width: ((this.props.winWidth > 768) ? "1400px" : ""), marginBottom: "50px" }}>

                    {works.map((image, index) => (
                        <div key={index} className="frame" style={{ display: ((this.props.winWidth > 768) ? "inline" : ""), margin: ((this.props.winWidth > 768) ? "40px" : "40px auto"), }} >
                            <a href={image.link} target="_blank">
                                {/* <span id="imgtxt"> */}

                                {/* </span> */}
                                <img className="parallax" src={image.img} alt="" />
                                {/* <div class="overlay"> */}
                                <span className="content">
                                    <h4>{image.link.slice(8)} </h4>
                                    <h5> Technologies Used </h5>
                                    {console.log(image.tech)}
                                    <p className="tech"> {image.tech.map(item => ` ${item} |`)}
                                    </p>
                                    <p className="about">
                                        {image.about}
                                    </p>
                                    <ul className="list">
                                        {image.list.map(item => <li> {item} </li>)}
                                    </ul>
                                </span>
                                {/* </div> */}
                            </a>

                        </div>
                    ))}

                </div>
            </div>
        )
    };

}

export default Gallery;
