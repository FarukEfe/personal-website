import React from "react";

import "./styles.css";

class Navbar extends React.Component {
    render() {
        return (
            <div id="navigation">
                <nav className="rstack">
                    <a href="/"><img alt="mainlogo" className="logo" style={{width: 25, height: 25}} src={process.env.PUBLIC_URL + "/images/logos/home.svg"}/></a>
                    <ul className="nav_links">
                        <li className="stick-semibold"><a href="/portfolio">Portfolio</a></li>
                        <li className="stick-semibold"><a href="/emailme">Email Me</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul id="logos" className="nav_links">
                        <li><a href="/"><img alt="insta" className="logo" style={{width: 25, height: 25}} src={process.env.PUBLIC_URL + "/images/socials/insta.svg"}/></a></li>
                        <li><a href="/"><img alt="twitch" className="logo" style={{width: 25, height: 25}} src={process.env.PUBLIC_URL + "/images/socials/linkedin.svg"}/></a></li>
                        <li><a href="/"><img alt="youtube" className="logo" style={{width: 25, height: 25}} src={process.env.PUBLIC_URL + "/images/socials/github.svg"}/></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

// <img alt="gmail" style={{width: 25, height: 25}} src={process.env.PUBLIC_URL + "/images/socials/gmail.svg"} />

export default Navbar;