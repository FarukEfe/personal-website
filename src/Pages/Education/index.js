import React from "react";

import "./styles.css";

import Card from "../../Components/Card";

export default function EducationPage(props) {
    return (
            <div id="education">
                <h1>Education:</h1>
                <div className="h-flex">
                    <Card bg={process.env.PUBLIC_URL + "images/bg/mcmaster.jpg"} logo={process.env.PUBLIC_URL + "images/logos/mcmaster.png"} />
                    <Card bg={process.env.PUBLIC_URL + "images/bg/lcs.jpg"} logo={process.env.PUBLIC_URL + "images/logos/lcs.png"} />
                    <Card bg={process.env.PUBLIC_URL + "images/bg/saintjoseph.jpg"} logo={process.env.PUBLIC_URL + "images/logos/saintjoseph.png"} />
                </div>
                <h1>Certifications:</h1>
            </div>
        ) 
}