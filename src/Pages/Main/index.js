import React from "react";

import Banner from "../../Components/Banner/index.js";
import Experiences from "../Experiences/index.js";

/* CSS */
import "./styles.css";
import SliderTable from "../../Components/Slider/index.js";
import AboutMe from "../AboutMe/index.js";
import { slcard_example } from "../../Components/SliderCard/index.js";
import SliderBanner from "../../Components/SliderBanner/index.js";

export default function MainPage() {

    const edu_banner = <SliderBanner title={"Education"} emoji={"📖"} background={"education.jpg"} />

    return (
        <div className="main">
            <Banner />
            <AboutMe test={true} />
            <SliderTable items={[edu_banner, slcard_example, slcard_example, slcard_example]} />
        </div>
    )
}

/* 
            <div className="content education">
                <h1 className="content-title stick-semibold">Education</h1>
                <EducationPage />
            </div>
*/
/*
            <div className="content experiences">
                <h1 className="content-title stick-semibold">Experience</h1>
                <Experiences />
            </div>
*/
// Who Am I: https://webflow.com/blog/web-design-portfolios
// Schools: Swiperjs
// 