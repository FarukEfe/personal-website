import React from "react";
import Logo from "./Logo";
/* style */
import './styles/navstyle.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <div>
                    <a className="nav-item"><Logo style={{width:38,height:38}} image="yuniks-logo.png" /></a>
                    <a href="/streams" className="nav-item stick-bold">Streams</a>
                    <a href="/joinus" className="nav-item stick-bold">Join Us</a>
                    <a href="/community" className="nav-item stick-bold">Community</a>
                </div>
                <div>
                    <a href="/" id="twitch-logo" className="socials stick-medium"><Logo style={{width:24,height:24}} className="socials" id="twitch-logo" image="insta.png" /><p>YunX</p></a>
                    <a href="/" id="yt-logo" className="socials stick-medium"><Logo style={{width:32,height:24}} className="socials" id="yt-logo" image="youtube.png" /><p>YuniksNaberDiyo</p></a>
                    <a href="/" id="yt-logo" className="socials stick-medium"><Logo style={{width:32,height:24}} className="socials" id="yt-logo" image="youtube.png" /><p>YuniksNaberDiyo</p></a>
                </div>
            </nav>
        )
    };
}

export default Navbar;