import React, { Component } from "react";
import { Image, CloudinaryContext } from 'cloudinary-react';
import "./Gallery.css"


class Gallery extends Component {

    componentWillMount() {
        // document.querySelectorAll('.content').forEach(img => (img.addEventListener('mousever', e => {console.log(e)})))
    }


    render() {

        const works = [
            {
                img: "portfolio/saltedpineapple.png",
                link: "https://store.kevinpena.io/",
                tech: ["React", "Apollo", "Graphql-yoga", "Prisma"],
                about: "E-Commerce Platform",
                list: ["Implemented authentication", "Secure checkout with Stripe", "Configured for SMTP", "Incorporated Cloudinary for image upload"]
            },
            {
                img: "portfolio/blog.png",
                link: "https://blog.kevinpena.io",
                tech: ["React", "Apollo", "Graphql-yoga", "Prisma"],
                about: "Personal Blog",
                list: ["Implemented authentication", "Mobile friendly", "Clean and modern UI"]
            },
            {
                img: "portfolio/work1.png",
                link: "https://freenica.herokuapp.com",
                tech: ["Node", "Express", "React", "MongoDB", "Reactstrap", "Firebase", "Auth0"],
                about: "App for displaying trending information",
                list: ["Intergrated Auth0 with different level scopes", "Implemented Twitter API and socket.io to stream live tweets", "Full CRUD capabilities with MongoDB", "Uses Cloudinary API to host pictures", "Integrated Firebase database for extra secure storage", "Mobile Responsive Layout"]
            },
            {
                img: 'https://res.cloudinary.com/kevinpena/image/upload/v1568782070/portfolio/Screen_Shot_2019-09-17_at_11.47.20_PM.png',
                link: 'https://bakked.kevinpena.io',
                tech: ['React', 'Firebase'],
                about: 'App displaying real time information with authentication',
                list: ['Implemented realtime database']
            }
        ];



        return (
            <div className={this.props.open ? "fixed blur" : "fixed"} style={{ height: ((this.props.winWidth > 768) ? "100vh" : "") }}>

                <h1 id="list-item-3"> Gallery </h1>
                <div className="gallery" style={{ width: ((this.props.winWidth > 768) ? "1800px" : ""), marginBottom: "50px" }}>
                    <CloudinaryContext
                        cloudName="kevinpena"
                        api_key="587278848336357"
                        api_secret="kQb60I5pBDhB5RhOcNddLANt3N0" >

                        {works.map((image, index) => (
                            <div key={index} className="frame" style={{ display: ((this.props.winWidth > 768) ? "inline" : ""), margin: ((this.props.winWidth > 768) ? "40px" : "40px auto"), }} >
                                <a href={image.link} target="_blank">

                                    {/* <img className="parallax" src={image.img} alt="" /> */}

                                    <Image publicId={image.img} className="parallax" width="350" />

                                    <span className="content">

                                        <h4>{image.link.slice(8)} </h4>
                                        <h5> Technologies Used </h5>
                                        <p className="tech"> {image.tech.map((item) => ` ${item} |`)}
                                        </p>
                                        <p className="about">
                                            {image.about}
                                        </p>
                                        <ul className="list">
                                            {image.list.map((item, index) => <li key={index}> {item} </li>)}
                                        </ul>
                                    </span>
                                    {/* </div> */}
                                </a>

                            </div>
                        ))}
                    </CloudinaryContext>
                </div>

            </div>
        )
    };

}

export default Gallery;
