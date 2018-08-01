import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import "./About.css";
import Nav from "../../components/Nav";
import { StickyContainer, Sticky } from 'react-sticky';


class About extends Component {

    constructor(props) {
        super(props);
        this.checkWidth = this.checkWidth.bind(this);
    }

    checkWidth() {
        console.log(this.props);
    }


    render() {

        return (
            <div>


                <div id="about" style={{
                    width: "100%",
                    backgroundColor: "linear-gradient(to bottom, #e7e7ef 0%, #75ACDD 100%)",

                }}>


                    <Fade left>
                        <img src="assets/pics/IMG_1745.png" id="me" style={{
                            width: "200px",
                            height: "350px",
                            borderRadius: "20px"
                        }} />
                    </Fade>

                    <Fade right
                        style={{ float: "right" }}>

                        <div>
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
                        </div>
                    </Fade>

                    {/* <Background className="custom-bg " >
                <img src="assets/pics/nopales.jpg" alt="flours" id="flower" />

            </Background> */}
                </div>


            </div >
        )
    }


};

export default About;
