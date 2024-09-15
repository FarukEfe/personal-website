import React from "react";

import "./styles.css";

class AboutMe extends React.Component {

    old() {
        <div className="content about-me">
            <h1 className="content-title stick-semibold">Who Am I?</h1>
            <div className="p-container">
                <div className="paragraphs">
                    <div className="p-stretch push-left"><p className="roboto-light">I am a Computer Science (CO-OP) 🖥️ Bachelor's Student 👨‍🎓 at the <a href="/" id="mcmaster-link" className="roboto-light">McMaster University</a>. I have a strong interest in computers and new technologies. In particular, my deepest curiosities are Quantum Computers ⚛️, Artificial Intelligence 🤖, and Energies of the Future 🔋.</p></div>
                    <div className="p-stretch push-right"><p className="roboto-light">To pursue these curiosities, I am mainly looking forward to pursue Graduate Studies in Quantum Computing. I've also taken Machine Learning courses and I am currently active on Kaggle.</p></div>
                    <div className="p-stretch push-left"><p className="roboto-light">Lol IDK WHAT ELSE TO PUT IN HERE SO TAKE THIS TEXT AS A PLACEHOLDER......</p></div>
                </div>
                <div className="content-bg">
                    <img alt="aboutme" src={process.env.PUBLIC_URL + "/images/bg/mcmaster.jpg"} />
                </div>
            </div>
        </div>
    }

    render() {
        return this.props.test ? (
            <div className="aboutme">
                <h1 className="title handjet-bold">Welcome to my page. Let me introduce myself:</h1>
                <div className="paragraphs">
                    <p className="middle handjet-medium">I am a Computer Science (CO-OP) 🖥️ Bachelor's Student 👨‍🎓 at the <a href="/" className="aboutme-link">McMaster University</a>. </p>
                    <p className="bottom handjet-medium">I have a strong interest in computers and new technologies. In particular, my deepest curiosities are Quantum Computers ⚛️, Artificial Intelligence 🤖, and Energies of the Future 🔋.</p>
                </div>
            </div>
        ) : this.old()
    }
}

export default AboutMe;