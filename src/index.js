import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

var images = [
    "assets/pics/cloudshor.png",
    "assets/pics/IMG_0388.png",
    "assets/pics/IMG_9059.JPG",
    "assets/pics/IMG_1162.png",
    "assets/pics/IMG_4143.JPG",
    "assets/pics/IMG_4271.JPG",
    "assets/pics/IMG_4533.JPG",
    "assets/pics/IMG_4554.JPG",
    "assets/pics/IMG_5071.JPG",
    "assets/pics/IMG_5090.JPG",
    "assets/pics/IMG_4641.JPG",
    "assets/pics/IMG_4344.JPG"
];

ReactDOM.render(<App images={images} />, document.getElementById("root"));
registerServiceWorker();
