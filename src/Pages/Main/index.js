import React from "react";

import Banner from "../../Components/Banner/index.js";

/* CSS */
import "./styles.css";

export default function MainPage() {
    return (
        <div id="main">
            <Banner />
            <div className="content about-me">
                <h1 className="stick-semibold">Who Am I?</h1>
                <div className="paragraphs">
                    <div className="p-stretch push-left"><p className="roboto-light">I am a Computer Science (CO-OP) 🖥️ Bachelor's Student 👨‍🎓 at the <a href="/" id="mcmaster-link" className="roboto-light">McMaster University</a>.</p></div>
                    <div className="p-stretch push-right"><p className="roboto-light"></p></div>
                </div>
            </div>
        </div>
    )
}

/*
            <div className="content reverse education">
                <h1 className="stick-semibold">Education</h1>
            </div>
            <div className="content my-work">
                <h1 className="stick-semibold">My Work</h1>
                <div></div>
            </div>
            <div className="content reverse interests">
                <h1 className="stick-semibold">Interests</h1>
            </div>
*/