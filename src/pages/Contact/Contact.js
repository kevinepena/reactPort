import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import "./Contact.css";
import Nav from "../../components/Nav";
import { StickyContainer, Sticky } from 'react-sticky';
import axios from "axios";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', textarea: '', gif: '', gifs: [] };

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
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
        this.setState({name: '', email: '', textarea: ''})
    }

    handleGifSubmit(event) {
        event.preventDefault();
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=IBWSeiwHQf0G4PKRWdLB1h8M4WDjcKLX&q=${this.state.gif}&limit=25&offset=0&lang=en`)
        .then(res => {
            this.setState({gifs: res.data.data})
            console.log(this.state.gifs)})
        .catch(err => console.log(err));

        this.setState({gif: ""})
    }



    render() {
        return (
            <div id="form" >


                <section id="emailForm">
                    <h1>Shoot me a message </h1>
                    <form onSubmit={this.handleEmailSubmit}>
                        <label>
                            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                        </label>
                        <label>
                            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                        </label>
                        <br />
                        <label>
                            Questions, Comments, Concerns:
          <textarea value={this.state.textarea} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </section>
                <section id="giphyform">
                <div id="gifArea">
                {(this.state.gifs === "") ? "Search Giphy!" : (this.state.gifs.map(jif => <img src={jif.images.fixed_height.url} />))}
                </div>
                    <h1>Send me a gif</h1>
                    <form onSubmit={this.handleGifSubmit}>
                        <label>
                            Search:
            <input type="text" value={this.state.gif} onChange={this.handleChange} name="gif" />
                        </label>
                

                        <input type="submit" value="Submit" />
                    </form>
                </section>

            </div>
        );
    }
}

export default Contact;
