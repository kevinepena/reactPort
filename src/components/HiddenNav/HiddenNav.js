import React, { Component } from "react";
import "./HiddenNav.css";


export default class HiddenNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleChange(event) {
        console.log(this.event)
        this.setState({ open: event.target.open });
    }


    handleResize() {
        this.setState({windowWidth: window.innerWidth});
        console.log(this.state.windowWidth)
      }
      
      componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
      } 


    componentDidMount() {
        this.setState({ open: false });
    }

    toggleMenu() {
        this.setState({ open: !this.state.open });
        console.log(this.state.open)
    }

    render() {
        const linksArray = [
            { name: "About", url: "/about" },
            { name: "Galery", url: "/gallery" },
            { name: "Contact", url: "/contact" }
        ];
        const socialArray = [
            {
                icon: "fa fa-github-square",
                url: "https://github.com/kevinepena"
            }, {
                icon: "fa fa-instagram",
                url: "https://www.instagram.com/kevinepena/"
            }, {
                icon: "fa fa-tumblr-square",
                url: "http://matthewvincentphotography.com/"
            }
        ];


        return (
            <div id="menu">
                <Button
                    onChange={this.handleChange}
                    toggle={this.toggleMenu}
                    open={this.state.open}
                />
                <Panel
                    open={this.state.open}
                    links={linksArray}
                    socialLinks={socialArray}
                />
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button
                className={this.props.open
                    ? "menu-toggle close-button"
                    : "menu-toggle "}
                onClick={this.props.toggle}
            > <i className="fa fa-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" fill="#fff" transform="matrix(.77976 0 0 .78395-299.99-418.63)" /></svg></i>
            </button>
        )
    }
};

class Panel extends React.Component {
    render() {
        return (
            <div
                className={this.props.open
                    ? "menu-wrapper menu-open"
                    : "menu-wrapper"}
            >
                <Links
                    links={this.props.links}
                    open={this.props.open}
                />
                <Social
                    socialLinks={this.props.socialLinks}
                    open={this.props.open}
                />
            </div>
        );
    }
};

class Links extends React.Component {
    render() {
        const linkList = this.props.links.map((link) => (
            <li className="link">
                <a href={link.url}>{link.name}</a>
            </li>
        ));

        return (
            <div
                className={this.props.open
                    ? "links-wrapper"
                    : "links-wrapper links-wrapper-closed"}
            > <ul className="link-list">
                    {linkList}
                </ul>
            </div>
        );
    }
};

class Social extends React.Component {
    render() {
        const socialLinks = this.props.socialLinks.map((link) => (
            <a href={link.url}>
                <i className={link.icon} />
            </a>
        ));

        return (
            <div
                className={this.props.open
                    ? "social-wrapper social-open"
                    : "social-wrapper social-closed"}
            > {socialLinks}
            </div>
        );
    }
};
