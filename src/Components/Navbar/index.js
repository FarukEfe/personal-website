import React from "react";

import "./styles.css";

class Navbar extends React.Component {
    render() {
        return (
            <div id="navigation">
                <nav className="rstack">
                    <a href="/"><img alt="mainlogo" id="main" className="logo" style={{width: 28, height: 28}} src={process.env.PUBLIC_URL + "/images/logos/home.svg"}/></a>
                    <ul className="nav_links">
                        <li className="stick-semibold"><a href="/aboutme">About Me</a></li>
                        <li className="stick-semibold"><a href="/education">Education</a></li>
                        <li className="stick-semibold"><a href="/interests"><button>Interests</button></a></li>
                    </ul>
                </nav>
                <nav>
                    <ul id="logos" className="nav_links">
                        <li><a href="/"><img alt="insta" className="logo" style={{width: 22, height: 22}} src={process.env.PUBLIC_URL + "/images/socials/insta.svg"}/></a></li>
                        <li><a href="/"><img alt="twitch" className="logo" style={{width: 22, height: 22}} src={process.env.PUBLIC_URL + "/images/socials/linkedin.svg"}/></a></li>
                        <li><a href="/"><img alt="youtube" className="logo" style={{width: 22, height: 22}} src={process.env.PUBLIC_URL + "/images/socials/github.svg"}/></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

/*
<li><a href="#"><img className="logo" style={{width: 21, height: 21}} src={process.env.PUBLIC_URL + "/images/insta.png"}/></a></li>
<li><a href="#"><img className="logo" style={{width: 21, height: 21}} src={process.env.PUBLIC_URL + "/images/twitch.png"}/></a></li>
<li><a href="#"><img className="logo" style={{width: 28, height: 21}} src={process.env.PUBLIC_URL + "/images/youtube.png"}/></a></li>
*/

export default Navbar;