import React from "react";

/* CSS */
import "./styles.css";

/* 
IMPORTANT
All of the "fa" tagged class names are imported from an open source library on cdn.
Its import html tag is on App.js
*/

class Footer extends React.Component {
    render() { 
        return (
            <div id="footer">
                <div className="socialIcons">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-insta"></i></a>
                    <a href=""><i className="fa-brands fa-twitch"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Join Us</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Streams</a></li>
                    </ul>
                </div>
                <div className="footerBottom">
                    <p>Copyrighth &copy;2022; Designed by <span id="designer">AdmOztruc</span></p>
                </div>
            </div> 
        )
    };
}

export default Footer;