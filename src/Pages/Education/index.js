import React from "react";

import "./styles.css";

import Card from "../../Components/Card";

export default function EducationPage(props) {

    let infos = [
        {
            title: "McMaster University",
            period: "September 2023 - Now",
            level: "Bachelor's Degree",
            off_curriculum: ""
        },
        {
            title: "Lakefield College School",
            period: "September 2021 - June 2023",
            level: "Ontario High School Diploma",
            off_curriculum: "Basketball Varsity 1st Team, Coding Club, Drone Club, Senior In Charge of the Colebrook Residence"
        },
        {
            title: "Istanbul Saint Joseph French High School",
            period: "September 2019 - June 2021",
            level: "High School (First 3 Years)",
            off_curriculum: ""
        }
    ]

    return (
            <div id="education">
                <div className="h-flex">
                    <Card info={infos[0]} bg={process.env.PUBLIC_URL + "images/bg/mcmaster.jpg"} logo={process.env.PUBLIC_URL + "images/logos/mcmaster.png"} />
                    <Card info={infos[1]} bg={process.env.PUBLIC_URL + "images/bg/lcs.jpg"} logo={process.env.PUBLIC_URL + "images/logos/lcs.png"} />
                    <Card info={infos[2]} bg={process.env.PUBLIC_URL + "images/bg/saintjoseph.jpg"} logo={process.env.PUBLIC_URL + "images/logos/saintjoseph.png"} />
                </div>
            </div>
        ) 
}

//<h1 className="stick-bold">Education:</h1>
//<h1 className="stick-bold">Certifications:</h1>