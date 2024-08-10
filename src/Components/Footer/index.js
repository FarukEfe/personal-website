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
                    <a href=""><i className="fa-brands fa-linkedin" /></a>
                    <a href=""><i className="fa-brands fa-instagram" /></a>
                    <a href=""><i className="fa-brands fa-twitter" /></a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li className="stick-semibold"><a href="">Home</a></li>
                        <li className="stick-semibold"><a href="">Join Us</a></li>
                        <li className="stick-semibold"><a href="">Community</a></li>
                        <li className="stick-semibold"><a href="">Streams</a></li>
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