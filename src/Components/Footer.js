import React from "react";
import Logo from "./Logo";
/* CSS */
import "./styles/footerstyle.css";

class Footer extends React.Component {
    render() { 
        return <div id="footer"><Logo style={{width:50,height:50}} image="insta.png" /></div> 
    };
}

export default Footer;