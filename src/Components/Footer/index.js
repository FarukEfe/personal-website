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
                        <a href="/"><img alt="insta" className="logo" style={{width: 40, height: 40}} src={process.env.PUBLIC_URL + "/images/socials/insta.svg"}/></a>
                        <a href="/"><img alt="twitch" className="logo" style={{width: 40, height: 40}} src={process.env.PUBLIC_URL + "/images/socials/linkedin.svg"}/></a>
                        <a href="/"><img alt="youtube" className="logo" style={{width: 40, height: 40}} src={process.env.PUBLIC_URL + "/images/socials/github.svg"}/></a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li className="stick-semibold"><a href="/">Portfolio</a></li>
                        <li className="stick-semibold"><a href="/">Email Me</a></li>
                        <li className="stick-semibold"><a href="/">Community</a></li>
                        <li className="stick-semibold"><a href="/">Streams</a></li>
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