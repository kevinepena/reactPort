import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clouds from "./pages/Clouds";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Nav from "./components/Nav";
import "./App.css";
// import Transition from 'react-transition-group/Transition';
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
// import HiddenNav from "./components/HiddenNav";
// import Section from "./components/Section";
// import preloaderImage from "./logo.svg";
// import ScrollView, { ScrollElement } from "./scroller";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { Element, Link } from 'react-scroll';
import Typist from "react-typist";

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
      active: false
    };
    // this.state = {vpHeight : this.all.current.clientHeight}
    this.handleResize = this.handleResize.bind(this);
    this.handleSetActive = this.handleSetActive.bind(this);
    this.handleSetInactive = this.handleSetInactive.bind(this);

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
        this.setState({
          images
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
    Events.scrollEvent.register('begin', function () {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      // console.log("end", arguments);
    });

    scrollSpy.update();

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

    // if (this.state.scrolly >= this.state.firststop) {
    //   this.setState({ show: true });
    // }

    // if (this.state.scrolly <= this.state.firststop) {
    //   this.setState({ show: false });
    // }
    // console.log(firststop);
    // console.log(scrolly)

  }

  handleSetActive() {
    this.setState({active: true})
    console.log(this.state.active)
  }

  handleSetInactive() {
    this.setState({active: false})
    console.log(this.state.active)
  }


  render() {

    return (
      <div>

        {/* <Clouds images={this.state.images} style={{ overflow: "hidden" }} /> */}

        <div style={{ overflow: "hidden" }} >


          <img className="One" src={this.state.images[0].src} />


        </div>

        <div id="all"
        >
          <div className="nav links" style={{backgroundColor: (!this.state.active) ? "" : "rgba(255, 255, 255, 0.5)"}}
          >


            <Link className="navbar-brand" to="section" spy={true} smooth={true} duration={500} offset={-200} activeClass="active" containerId="containerElement" onSetActive={this.handleSetInactive} ignoreCancelEvents={true}>
              <Typist
                className="logospot"
                cursor={{ show: false }}>
                <Typist.Delay ms={2500} />
                <span id="name">Kevin Peña</span>
                <Typist.Backspace count={10} delay={1500} />
                <span id="dev" >Developer</span>
                <Typist.Backspace count={9} delay={1500} />
                <span id="ent">Entrepreneur</span>
                <Typist.Backspace count={12} delay={1500} />
                <span id="name">KP: </span>

              </Typist>
            </Link>
            <div style={{display: "inline", opacity: (!this.state.active) ? "0" : "1"}}>
          <Link className="navbar-brand link" to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive}  ignoreCancelEvents={true}>
          {(this.state.winWidth >= 768) ? "Contact" : "."}
            </Link>

          <Link className="navbar-brand link" to="gallery" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
          {(this.state.winWidth >= 768) ? "Gallery" : "."}
            </Link>

          <Link className="navbar-brand link" to="about" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
            {(this.state.winWidth >= 768) ? "About" : "."}
            </Link>
          </div>
        </div>


        <Element name="container" className="element" id="containerElement">
          <Element name="section">
            <nav id="mainnav">
              <ul>


                <Link className="homelink" to="about" spy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement">
                  <span><img src="assets/pics/bitmoji/hellobitmoji.png" className="popup" /></span>
                  About
                 </Link>
                <Link className="homelink" to="gallery" spy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement">
                  <span><img src="assets/pics/bitmoji/gallerybitmoji.png" className="popup" /></span>
                  Gallery
                  </Link>
                <Link className="homelink" to="contact" spy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement">
                  <span><img src="assets/pics/bitmoji/contactbitmoji.png" className="popup" /></span>
                  Contact
            </Link>
              </ul>
            </nav>
          </Element>
          <Element name="about" >
            <About className="about" winWidth={this.state.winWidth} />

          </Element>
          <Element name="gallery" >
            <Gallery className="gallery" images={this.state.images} winWidth={this.state.winWidth} />

          </Element>
          <Element name="contact" >
            <Contact className="contact" />

          </Element>
        </Element>

      </div>


      </div >


    )
  }
}

export default App;
