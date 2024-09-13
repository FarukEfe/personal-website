import React from "react";

import Banner from "../../Components/Banner/index.js";
import Education from "../Education/index.js"
import Experiences from "../Experiences/index.js";

/* CSS */
import "./styles.css";
import SliderTable from "../../Components/Slider/index.js";
import AboutMe from "../AboutMe/index.js";

export default function MainPage() {
    return (
        <>
        <div className="main">
        <Banner />
        <AboutMe test={true} />
        <div className="content education" >
            <h1 className="content-title stick-semibold">Education</h1>
            <SliderTable items={[<span>lol1</span>,<span>lol1</span>,<span>lol1</span>,<span>lol1</span>]} />
        </div>
        <div className="content experiences">
            <h1 className="content-title stick-semibold">Experience</h1>
            <Experiences />
        </div>
        <SliderTable items={[<span>lol1</span>,<span>lol1</span>,<span>lol1</span>,<span>lol1</span>]} />
        </div>
        </>
    )
}

/* 
            <div className="content education">
                <h1 className="content-title stick-semibold">Education</h1>
                <EducationPage />
            </div>
*/

// Who Am I: https://webflow.com/blog/web-design-portfolios
// Schools: Swiperjs
// 