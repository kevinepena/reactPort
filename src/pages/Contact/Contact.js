import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import "./Contact.css";
import Nav from "../../components/Nav";
import { StickyContainer, Sticky } from 'react-sticky';
import axios from "axios";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', textarea: '', gif: '', gifs: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.handleGifSubmit = this.handleGifSubmit.bind(this)
    }

    componentDidMount() {
        console.log(this.state.gifs)
    }



    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleEmailSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        this.setState({ name: '', email: '', textarea: '' })
    }

    handleGifSubmit(event) {
        event.preventDefault();
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=IBWSeiwHQf0G4PKRWdLB1h8M4WDjcKLX&q=${this.state.gif}&limit=25&offset=0&lang=en`)
            .then(res => {
                this.setState({ gifs: res.data.data })
                console.log(this.state.gifs)
            })
            .catch(err => console.log(err));

        this.setState({ gif: "" })
    }



    render() {
        return (

            <Container fluid  >

                <Row >
                    <div id="form">
                        <Col size="md-6 sm-12" id="emailForm">

                            <h1 id="list-item-4">Shoot me a message </h1>
                            <form >
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
                                >
                                    Submit
                                </FormBtn>
                            </form>

                        </Col>
                        <br />
                        <br />
                        <Col size="md-6 sm-12" id="giphyform">

                            
        {(this.state.gifs == "") ? (<img style={{ width: "300px" }} src="assets/pics/giphylogo.png" />) : (<div id="gifArea">{this.state.gifs.map(jif => <img src={jif.images.fixed_height.url} />)}</div>)}
                            
                            <h1>Send me a gif</h1>
                            <form >
                                {/* <label>
                                        Search:
            <input type="text" value={this.state.gif} onChange={this.handleChange} name="gif" />
                                    </label>
                                    <input type="submit" value="Submit" /> */}

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

                        </Col>
                    </div>
                </Row>
            </Container>

        );
    }
}

export default Contact;
