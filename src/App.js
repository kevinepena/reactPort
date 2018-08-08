import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clouds from "./pages/Clouds";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
// import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from "./components/Nav";
import "./App.css";
// import Transition from 'react-transition-group/Transition';
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
// import HiddenNav from "./components/HiddenNav";
// import Section from "./components/Section";
// import preloaderImage from "./logo.svg";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { Element, Link } from 'react-scroll';
import Typist from "react-typist";
import facebook from "./svg/facebook.svg";
import linkedin from "./svg/linkedin.svg";
import twitter from "./svg/twitter.svg";
import github from "./svg/github-logo.svg";
import instagram from "./svg/instagram.svg";
import snapchat from "./svg/snapchat.svg";
import Button from './components/Button';
import { Col, Row, Container } from "./components/Grid";

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
      // { social: instagram, link: "https://instagram.com/kevinepena" }, { social: facebook, link: "https://facebook.com/kevinpena0" }, { social: snapchat, link: "https://www.snapchat.com/add/kevinn_pena" }, 
      { social: twitter, link: "https://twitter.com/kevinepena" }],
      shareIcons: [facebook, linkedin, twitter],
      time: 1500,
      done: false,
      open: false
    };
    // this.state = {vpHeight : this.all.current.clientHeight}
    this.handleResize = this.handleResize.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    // this.handleSetActive = this.handleSetActive.bind(this);
    // this.handleSetInactive = this.handleSetInactive.bind(this);
  }

  componentWillMount() {

    this.state.images.forEach((image, index) => {

      const src = image.image
      // const { image } = image // get image primary src

      const primaryImage = new Image() // create an image object programmatically

      primaryImage.onload = () => { // use arrow function here
        console.log(`image #${index + 1} is loaded!`)
        const images = [...this.state.images] // copy images array from state
        images[index].src = src // adjust loaded image src
        clearInterval(this.state.time)
        this.setState({
          images,
        })
      }
      primaryImage.src = src // do it after you set onload handler
    })

    // axios
    // .get('https://res.cloudinary.com/matsi/image/list/nica.json')
    // .then(res => {
    //     this.setState({ gallery: res.data.resources });
    // });

  }



  componentDidMount() {

    this.handleResize;

    Events.scrollEvent.register('begin', function () {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      // console.log("end", arguments);
    });

    scrollSpy.update();

    if (this.state.winWidth < 768) {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })
    }

    window.addEventListener('resize', this.handleResize);
    // document.getElementById('all').addEventListener('scroll', this.updateNavOpacity);
  }


  handleResize() {

    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    const scrolly = window.scrollY;
    const firststop = (winHeight * .15) * 5.65;


    // this.setState({ firststop });
    // this.setState({ scrolly });
    this.setState({ winWidth })
    console.log(winWidth)
    console.log(this.state.active)
    if (winWidth < 768) {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })
    }

    // if (this.state.scrolly >= this.state.firststop) {
    //   this.setState({ show: true });
    // }

    // if (this.state.scrolly <= this.state.firststop) {
    //   this.setState({ show: false });
    // }
    // console.log(firststop);
    // console.log(scrolly)

  }

  // handleSetActive() {

  //   this.setState({ active: true })

  // }

  // handleSetInactive() {
  //   this.setState({ active: false })

  // }

  handleOpen() {
    this.setState({ open: !this.state.open })
    console.log(this.state.open)
  }


  render() {

    return (
      <div>

        {/* <Clouds images={this.state.images} style={{ overflow: "hidden" }} /> */}



        <Container fluid>
          <Nav

            active={this.state.active}
          />

          <Row>

            <div id="all"
            >

              <button className="cloud" onClick={this.handleOpen} style={{ display: (this.state.active) ? "" : "none" }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="cloud" ><path d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" fill="#fff" transform="matrix(.77976 0 0 .78395-299.99-418.63)" /></svg>
              </button>

              <Button socialIcons={this.state.socialIcons} />
              {/* <Button /> */}
              <Col size="md-3 sm-3 xs-12">


                <Element name="section"
                  className={(this.state.active) ? "mobile" : "" }>
                  <nav id="mainnav" >

                  <Link className="navbar-brand link" to="about" spy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                    About
                    </Link>
                  <br />
                  <Link className="navbar-brand link" to="gallery" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                    Gallery
                    </Link>
                  <br />
                  <Link className="navbar-brand link" to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                    Contact
                    </Link>
                </nav>


                </Element>
              </Col>
            <Col size="md-9 sm-9 xs-12">

{/* (this.state.open) ? 'open': ''   */}


              <Element name="container" className="element" id="containerElement">



                {/* </Col>

                <Col size="md-9 sm-12"> */}

                <Element name="about" >
                  <About className="about" winWidth={this.state.winWidth} />

                </Element>
                <Element name="gallery" >
                  <Gallery className="gallery" images={this.state.images} winWidth={this.state.winWidth} />

                </Element>
                <Element name="contact" >
                  <Contact className="contact" socialIcons={this.state.socialIcons} />

                </Element>
              </Element>
            </Col>
            </div>
          </Row>
        </Container>

      <div style={{ overflow: "hidden" }} >


        <img className="One" src={this.state.images[0].src} />


      </div>
      </div >


    )
  }
}

export default App;
