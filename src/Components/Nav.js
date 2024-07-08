import Logo from "./Logo";

class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <div>
                    <a><Logo image="yuniks-logo.png" /></a>
                    <a class="nav-item"><text>Streams</text></a>
                    <a class="nav-item"><text>Credits</text></a>
                    <a class="nav-item"><text>Join Us</text></a>
                    <a class="nav-item"><text>Community</text></a>
                </div>
                <div>
                    <a><Logo class="socials" id="twitch-logo" image="twitch.png" /></a>
                    <a><Logo class="socials" id="yt-logo" image="youtube.png" /></a>
                </div>
            </nav>
        )
    }
}