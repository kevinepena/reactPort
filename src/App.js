import React, { Component } from "react";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import "./App.css";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import facebook from "./svg/facebook.svg";
import linkedin from "./svg/linkedin.svg";
import twitter from "./svg/twitter.svg";
import github from "./svg/github-logo.svg";
import mail from "./svg/mail.svg"
import instagram from "./svg/instagram.svg";
import { Col, Row, Container } from "./components/Grid";
import { setInterval } from "core-js";

class App extends Component {



  constructor(props) {
    super(props);
    // this.all = React.createRef();
    this.state = {
      navOpacity: 0,
      scrollTop: 0,
      firststop: 0,
      scrolly: 0,
      opacity: 0,
      show: false,
      winWidth: window.innerWidth,
      winHeight: window.height,
      images: this.props.images.map(image => ({
        image,
        src: ""
      })),
      active: false,
      socialIcons: [{ social: github, link: "https://github.com/kevinepena" }, { social: linkedin, link: "https://linkedin.com/in/kevinepena" },
      { social: instagram, link: "https://instagram.com/kevinepena" }, { social: mail, link: "mailto:kevinpena160@gmail.com" },
      // { social: facebook, link: "https://facebook.com/kevinpena0" }, { social: snapchat, link: "https://www.snapchat.com/add/kevinn_pena" }, 
      { social: twitter, link: "https://twitter.com/kevinepena" }],
      shareIcons: [facebook, linkedin, twitter],
      time: 2000,
      done: false,
      open: true
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addSec = this.addSec.bind(this)
  }

  componentWillMount() {

    setInterval(this.addSec, 1000);

    this.state.images.forEach((image, index) => {

      const src = image.image
      // const { image } = image // get image primary src

      const primaryImage = new Image() // create an image object programmatically

      primaryImage.onload = () => { // use arrow function here
        // console.log(`image #${index + 1} is loaded!`)
        const images = [...this.state.images] // copy images array from state
        images[index].src = src // adjust loaded image src
        clearInterval(this.state.time)
        this.setState({
          images,
        })
      }
      primaryImage.src = src // do it after you set onload handler
    })

  }



  componentDidMount() {

    this.handleResize();

    Events.scrollEvent.register('begin', function () {
    });

    Events.scrollEvent.register('end', function () {
    });

    scrollSpy.update();

    if (this.state.winWidth < 768) {
      this.setState({ active: true })
    } else {
      this.setState({ active: false, open: false })
    }

    window.addEventListener('resize', this.handleResize);
    // window.addEventListener('scroll', this.updateNavOpacity);
  }

  addSec() {
    // console.log(this.state.time)
    this.setState({time: this.state.time + 1000})
    // console.log(this.state.time)
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  handleResize() {

    // var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    // const scrolly = window.scrollY;
    // const firststop = (winHeight * .15) * 5.65;
    this.setState({ winWidth })
    if (winWidth < 768) {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })

    }
  }

  handleOpen() {
    if (this.state.open === false) {
      this.setState({ open: true })
    }
    else if (this.state.open === true) {
      this.setState({ open: false })
    }
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {



    return (
      <div>


        <Container fluid>

          <svg className="cloud" onClick={this.handleOpen} style={{ display: (this.state.active) ? "" : "none" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" ><path d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" fill="#fff" transform="matrix(.77976 0 0 .78395-299.99-418.63)" />         </svg>

          <Nav time={this.state.time} active={this.state.active} />

          <Row>

            <div id="all">
              <Col size="md-3 sm-3 xs-12">

                <Element name="section"
                  onClick={this.handleClose}
                  id={(this.state.active) ? "mobile" : ""}
                  className={this.state.open ? "open" : "open-n"}>

                  <nav id="mainnav" >

                    <Link onClick={this.handleClose} className="navbar-brand link" to="about" spy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                      About
                    </Link>

                    <br />

                    <Link onClick={this.handleClose} className="navbar-brand link" to="gallery" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                      Gallery
                    </Link>

                    <br />

                    <Link onClick={this.handleClose} className="navbar-brand link" to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                      Contact
                    </Link>

                    <div id="socialdiv" style={{ bottom: (this.state.winWidth < 768) ? "2vh" : "-15vh" }}>

                      <br />

                      {this.state.socialIcons.map((icon, index) => <a key={index} href={icon.link} target={(icon.link === "mailto:kevinpena160@gmail.com") ? "" : "_blank"}><img alt="" src={icon.social} className="follow" /></a>)}

                    </div>

                  </nav>

                </Element>

              </Col>

              <Col size="md-9 sm-9 xs-12" >

                <Element name="container" className="element" id="containerElement" >

                  <Element name="about" >
                    <About className="about" open={this.state.open} winWidth={this.state.winWidth} />
                  </Element>

                  <Element name="gallery" >
                    <Gallery className="gallery" open={this.state.open} images={this.state.images} winWidth={this.state.winWidth} />
                  </Element>

                  <Element name="contact" >
                    <Contact className="contact" open={this.state.open} socialIcons={this.state.socialIcons} />
                  </Element>

                </Element>

              </Col>

            </div>

          </Row>

        </Container>

        <div style={{ overflow: "hidden" }} >
          <img alt="clouds" className="One" src={this.state.images[0].src} />
        </div>

      </div >


    )
  }
}

export default App;
