import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import "./Contact.css";
import Nav from "../../components/Nav";
import { StickyContainer, Sticky } from 'react-sticky';

 
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
        
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Contact;
