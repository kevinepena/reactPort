import React, { Component } from "react";
// import axios from 'axios';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import "./App.css";
import facebook from "./svg/facebook.svg";
import linkedin from "./svg/linkedin.svg";
import twitter from "./svg/twitter.svg";
import github from "./svg/github-logo.svg";
import mail from "./svg/mail.svg";

// import instagram from "./svg/instagram.svg";
import { Col, Row, Container } from "./components/Grid";
// import { setInterval } from "core-js";

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
      // images: this.props.images.map(image => ({
      //   image,
      //   src: ""
      // })),
      active: false,
      socialIcons: [{ social: github, link: "https://github.com/kevinepena" }, { social: linkedin, link: "https://linkedin.com/in/kevinepena" },
      { social: twitter, link: "https://twitter.com/kevinepena" },
      // { social: instagram, link: "https://instagram.com/kevinepena" }, 
      { social: mail, link: "mailto:kevinpena160@gmail.com" },
        // { social: facebook, link: "https://facebook.com/kevinpena0" }, { social: snapchat, link: "https://www.snapchat.com/add/kevinn_pena" }, 
      ],
      shareIcons: [facebook, linkedin, twitter],
      time: 2000,
      done: false,
      open: true
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  componentWillMount() {

    // this.state.images.forEach((image, index) => {

    //   const src = image.image
    //   // const { image } = image // get image primary src

    //   const primaryImage = new Image() // create an image object programmatically

    //   primaryImage.onload = () => { // use arrow function here
    //     // console.log(`image #${index + 1} is loaded!`)
    //     const images = [...this.state.images]; // copy images array from state
    //     images[index].src = src;// adjust loaded image src
    //     this.setState({
    //       images,
    //     })
    //   }
    //   primaryImage.src = src // do it after you set onload handler
    // })

  }



  componentDidMount() {
    console.log(this.state.backimg)

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
    this.setState({ open: !this.state.open })

  }

  handleClose() {
    this.setState({ open: false })
  }



  render() {



    return (


      <div id="all">

        <div style={{ overflow: "hidden" }} >
          {/* <img alt="clouds" className="One" src={"https://res.cloudinary.com/kevinpena/image/upload/q_50/v1540315018/portfolio/cloudshor.png"} /> */}
          <img alt="clouds" className="One" src={"assets/pics/background/back.jpg"} />
          {/* <img src={this.state.backimg ? this.state.backimg.urls.raw : ''} alt={this.state.backimg ? this.state.backimg.description : ''} style={{
            height: '100vh',
            width: '100%',
            objectFit: 'cover' }} /> */}
      
        </div>


        <div id="content">
          <Nav time={this.state.time} active={this.state.active} open={this.state.open} handleOpen={this.handleOpen} />

          <Container fluid>

            {/* <div style={{ overflow: "hidden" }} > */}
            {/* </div> */}

            <Row>
              {/* <div id="all"> */}
              <Col size="lg-3 md-3 sm-12 xs-12">

                <div name="section"
                  onClick={this.handleClose}
                  id={(this.state.active) ? "mobile" : ""}
                  className={this.state.open ? "open" : "open-n"}>

                  <nav id="mainnav" >

                    <Link onClick={this.handleClose} className=" link" to="about" spy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                      About
                    </Link>
                    <br />
                    <br />

                    <Link onClick={this.handleClose} className=" link" to="gallery" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                      Gallery
                    </Link>
                    <br />
                    <br />
                    <Link onClick={this.handleClose} className=" link" to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={-50} activeClass="active" containerId="containerElement" onSetActive={this.handleSetActive} ignoreCancelEvents={true}>
                      Contact
                    </Link>

                    <div id="socialdiv" style={{ bottom: (this.state.winWidth < 768) ? "2vh" : "-15vh" }}>

                      <br />

                      {this.state.socialIcons.map((icon, index) => <a key={index} href={icon.link} target={(icon.link === "mailto:kevinpena160@gmail.com") ? "" : "_blank"}><img alt="" src={icon.social} className="follow" /></a>)}

                    </div>

                  </nav>

                </div>

              </Col>

              <Col size="lg-9 md-9 sm-12 xs-12" classes="zerop">

                <Element name="container" className={this.state.active ? "element mob" : "element"} id="containerElement" >

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

              {/* </div> */}

            </Row>


            {/* <img alt="clouds" className="One" src={this.state.images[0].src} /> */}


          </Container>
        </div>

      </div>





    )
  }
}

export default App;
