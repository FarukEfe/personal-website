import React from "react";
import Logo from "./Logo";
/* style */
import './styles/navstyle.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <div>
                    <a><Logo image="yuniks-logo.png" /></a>
                    <a href="/streams" className="nav-item">Streams</a>
                    <a href="/joinus" className="nav-item">Join Us</a>
                    <a href="/community" className="nav-item">Community</a>
                </div>
                <div>
                    <a href="/"><Logo className="socials" id="twitch-logo" image="twitch.png" /></a>
                    <a href="/"><Logo className="socials" id="yt-logo" image="youtube.png" /></a>
                </div>
            </nav>
        )
    };
}

export default Navbar;