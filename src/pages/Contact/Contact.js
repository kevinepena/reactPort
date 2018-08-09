import React from "react";
import "./Contact.css";
import axios from "axios";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    // EmailShareButton,
    // EmailIcon

} from 'react-share';

import facebook from "../../svg/facebook.svg";
import linkedin from "../../svg/linkedin.svg";
import twitter from "../../svg/twitter.svg";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '', email: '', textarea: '', gif: '', gifs: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.handleGifSubmit = this.handleGifSubmit.bind(this)
    }


    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleEmailSubmit(event) {
        // alert('A name was submitted: ' + this.state.name);
        event.preventDefault();


    }

    handleGifSubmit(event) {
        event.preventDefault();
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=IBWSeiwHQf0G4PKRWdLB1h8M4WDjcKLX&q=${this.state.gif}&limit=25&offset=0&lang=en`)
            .then(res => {
                this.setState({ gifs: res.data.data })
            })
            .catch(err => console.log(err));

        this.setState({ gif: "" })
    }



    render() {

        const shareUrl = 'https://kevinpena.herokuapp.com';
        const title = "Check out Kevin's ReactJS portfolio!";

        return (



            <Container fluid   >

                <Row >
                    <div id="form" className={this.props.open ? "blur" : ""} >
                        <Col size="md-8 sm-12" id="emailForm">

                            <h1 id="list-item-4">Need a website?
                            <br />
                                Shoot me a message </h1>


                            {/* <form action="https://formspree.io/kevinpena160@gmail.com"
                                method="POST">
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    name="name"
                                    placeholder="Name"
                                />
                                <Input
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    name="email"
                                    placeholder="Email"
                                />
                                <Input
                                    value={this.state.textarea}
                                    onChange={this.handleChange}
                                    name="textarea"
                                    placeholder="Questions, Comments, Inquiries?"
                                />
                                <FormBtn
                                    disabled={!(this.state.name) || !(this.state.email) || !(this.state.textarea)}
                                    onClick={this.handleEmailSubmit}
                                    type="submit" value="Send"
                                >
                                    Submit
                                </FormBtn>
                            </form> */}

                            <form method="POST" action="https://formspree.io/kevinpena160@gmail.com" className="form-group">
                                <input onChange={this.handleChange} type="email" name="email" placeholder="Your email" className="form-control" />
                                <textarea onChange={this.handleChange} name="message" placeholder="Questions, Comments, Inquiries?" className="form-control" />
                                <button
                                    disabled={!(this.state.message) || !(this.state.email)}
                                    type="submit" value="Send" className="btn">Send</button>
                                <input type="text" name="_gotcha" style={{ display: "none" }} />
                                <input type="hidden" name="_next" value="https://kevinpena.io/#contact" />
                            </form>

                        </Col>
                        <br />
                        <br />


                        {/* <Col size="md-6 sm-12" id="giphyform">


                            {(this.state.gifs == "") ? (<img style={{ width: "168px" }} src="assets/pics/giphylogo.png" />) : (<div id="gifArea">{this.state.gifs.map(jif => <img src={jif.images.fixed_height.url} />)}</div>)}

                            <h1>Send me a gif</h1>
                            <form >

                                <Input
                                    value={this.state.gif}
                                    onChange={this.handleChange}
                                    name="gif"
                                    placeholder="Search Giphy"
                                />
                                <FormBtn
                                    disabled={!(this.state.gif)}
                                    onClick={this.handleGifSubmit}
                                    style={{
                                        color: "#ffffff",
                                        backgroundColor: "#000000",
                                        borderColor: "#000000",
                                    }}
                                >
                                    Search
                                </FormBtn>

                            </form>

                        </Col> */}
                        <footer id="sharefooter">
                            <Col size="md-4 sm-12">

                                Share my page <span role="img" aria-label="cool emoji">😎</span>
                                <br />
                                <LinkedinShareButton

                                    url={shareUrl}
                                    title={title}>
                                    <img alt="linkedin" src={linkedin} className="share" />
                                </LinkedinShareButton>

                                <TwitterShareButton

                                    url={shareUrl}
                                    title={title} >
                                    <img alt="twitter" src={twitter} className="share" />
                                </TwitterShareButton>
                                <FacebookShareButton

                                    url={shareUrl}
                                    quote={title} >
                                    <img alt="facebook" src={facebook} className="share" />
                                </FacebookShareButton>
                            </Col>


                        </footer>

                    </div>

                </Row>

            </Container>

        );
    }
}

export default Contact;
