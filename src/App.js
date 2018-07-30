import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clouds from "./pages/Clouds";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from "./components/Nav";
import "./App.css";
import Transition from 'react-transition-group/Transition';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import HiddenNav from "./components/HiddenNav";
import Section from "./components/Section";
import preloaderImage from "./logo.svg"

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};


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
        src: preloaderImage
      }))
    };
    // this.state = {vpHeight : this.all.current.clientHeight}
    this.handleResize = this.handleResize.bind(this);
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
    // this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }

  componentWillMount() {
    console.log(this.state.images);
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

  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.updateNavOpacity);
  }

  handleResize() {
    var winHeight = window.innerHeight;

    var winWidth = window.innerWidth;

    // winWidth = ((winWidth * .10) * 8) / 3;

    const scrolly = window.scrollY;


    const firststop = (winHeight * .15) * 5.65;


    this.setState({ firststop });
    this.setState({ scrolly });
    this.setState({ winWidth })

    if (this.state.scrolly >= this.state.firststop) {
      this.setState({ show: true });
    }

    if (this.state.scrolly <= this.state.firststop) {
      this.setState({ show: false });
    }

    var value = document.body.scrollTop;
    console.log(firststop);
    console.log(scrolly)

  }

  updateNavOpacity() {
    const navbarHeight = 50; // Bootstrap default
    const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
    const endFade = headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
    console.log(navOpacity)
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.updateNavOpacity);
  }

  renderNavigation() {
    console.log(this.state.winWidth)
    if (this.state.winWidth > 768) {
      return <Nav winWidth={this.state.winWidth} winHeight={this.state.winHeight} />

    } else {
      return <HiddenNav />
    }
  }


  render() {




    return (

      <Router>
        <div>
          <div>
          <Clouds />
          </div>
          <Nav  opacity={ this.state.navOpacity } borderBottomWidth={ this.props.bottomBorderWidth } />
          <div id="all">
            <Section />
            <About />
            <Gallery images={this.state.images} />
          </div>
        </div>
      </Router>

    )
  }
}

export default App;
