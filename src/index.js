import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

var images = [
    "assets/pics/background/cloudshor.png",

];

ReactDOM.render(<App images={images} />, document.getElementById("root"));
registerServiceWorker();
