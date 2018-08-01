import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import "./About.css";
import Nav from "../../components/Nav";
import { StickyContainer, Sticky } from 'react-sticky';
import { Carousel } from "react-responsive-carousel";
import { Col, Row, Container } from "../../components/Grid";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: ["assets/pics/IMG_1745.png",
                "assets/pics/IMG_4554.JPG",
                "assets/pics/IMG_5071.JPG",
                "assets/pics/IMG_5090.JPG",
                "assets/pics/IMG_4641.JPG",
                "assets/pics/IMG_4344.JPG"],
            winWidth: this.props.winWidth 
        }
    }





    render() {



        const carousel = this.state.images.forEach((elem, index) => {
            <div>
                <img src={elem} />
                <p className="legend">Legend {index} </p>
            </div>
        });

        return (
            <Container fluid>

                <Row>

                    <div id="about" style={{
                        width: "100%",
                        backgroundColor: "linear-gradient(to bottom, #e7e7ef 0%, #75ACDD 100%)",

                    }}>



                        <Col size="md-3 sm-12">
                            <Fade left>
                                {/* <Carousel >

                                {carousel}

                            </Carousel> */}
                                {/* <div className="slidecontainer">
                
                        </div> */}

                                <img src={(this.state.winWidth >= 768) ? "assets/pics/about/medesktop.png" : "assets/pics/about/memobile.png"} id="me" style={{
                                    width: "200px",
                                    height: (this.state.winWidth >= 768) ? "350px" : "200px",
                                    borderRadius: (this.state.winWidth >= 768) ? "20px" : "100px",
                                    display: "block",
                                    margin: "0 auto"
                                }} />
                            </Fade>
                        </Col>
                        <Col size="md-9 sm-12">
                            <Fade right
                            // style={{ float: "right" }}
                            >


                                <p id="bio" style={{
                                    float: "right",
                                    height: "50vh",
                                    fontSize: "20px",
                                    textShadow: "20px",
                                    zIndex: "9",
                                    color: "rgba(0, 0, 0, 0.9)",
                                    fontFamily: 'Raleway',
                                    overflow: "scroll"
                                }}><h1>About Me</h1> <br /> I am a young entrepreneur exploring my options and resources to fully exploit my future growth and further my knowledge. I have basic understanding of computer science through Texas state university, and knowledge of other programming languages such as Javascript, C++, and Swift through online self learning. I have recently completed The Coding Bootcamp at UT Austin which has given me the hands-on experience in full-stack development. I spend my time now developing custom websites (both front and back end) but would enjoy being part of a team and working with others. I strive to learn not only because I know it will get me a decent salary, but also because I want to use my knowledge to be part of something bigger.</p>
                                {/* <img src="assets/pics/nopales.jpg" alt="flours" id="flower" /> */}

                            </Fade>
                        </Col>
                        {/* <Background className="custom-bg " >
                <img src="assets/pics/nopales.jpg" alt="flours" id="flower" />

            </Background> */}
                    </div>

                </Row>
            </Container >
        )
    }


};

export default About;
