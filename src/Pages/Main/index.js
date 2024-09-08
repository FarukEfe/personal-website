import React from "react";

import Banner from "../../Components/Banner/index.js";
import EducationPage from "../Education/index.js"
import Experiences from "../Experiences/index.js";

/* CSS */
import "./styles.css";

export default function MainPage() {
    return (
        <div id="main">
            <Banner />
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
            <div className="content education">
                <h1 className="content-title stick-semibold">Education</h1>
                <EducationPage />
            </div>
            <div className="content experiences">
                <h1 className="content-title stick-semibold">Experience</h1>
                <Experiences />
                <div>
                    <div className="kaggle">
                    
                    </div>
                    <div className="coursera">
    
                    </div>
                </div>
                <div className="github">

                </div>
                <div className="igem">

                </div>
            </div>
        </div>
    )
}