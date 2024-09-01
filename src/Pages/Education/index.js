import React, { useState } from "react";

import "./styles.css";

import Card from "../../Components/Card";

export default function EducationPage(props) {

    let [item, setItem] = useState(1);
    let [active, setActive] = useState(false);

    let infos = [
        {
            title: "McMaster University",
            period: "September 2023 - Now",
            level: "Bachelor's in Computer Science (CO-OP)",
            total_avg: "A",
            tags: [],
            gradFrom: "#7A003C",
            gradTo: "#FDBF57"
        },
        {
            title: "Lakefield College School",
            period: "September 2021 - June 2023",
            level: "Ontario High School Diploma",
            total_avg: "A+",
            tags: ["Basketball Varsity 1st Team 🏀","Volleyball Varsity 1st Team 🏐","Coding Club 💻" ,"Drone Club 🛩️"],
            gradFrom: "#006251",
            gradTo: "#01466D"
        },
        {
            title: "Istanbul Saint Joseph French High School",
            period: "September 2018 - June 2021",
            level: "High School (9th and 10th Grades)",
            total_avg: "A",
            tags: ["Basketball Junior Team 🏀"],
            gradFrom: "#FCDE05",
            gradTo: "#1E4398"
        }
    ];

    return (
            <div id="education">
                <div className="card-nav-container" onClick={() => {
                    let newidx = (item === 0) ? 2 : item - 1;
                    setItem(newidx);
                    setActive(false);
                }}>
                    <img className="card-back" alt="back" src={process.env.PUBLIC_URL + "images/logos/forward.svg"} style={{width: 75, height: 75}} />
                </div>
                <div className="h-flex-container">
                    <div className="h-flex-gradient" />
                    <div className="h-flex">
                        <Card onClick={() => {
                            if (item === 2) {
                                setActive(!active);
                            }
                        }} school="sj" active={(item === 2 && active) ? "active" : "inactive"} order={(item === 2) ? 'c-second' : ((item === 1) ? 'c-third' : 'c-first')} info={infos[2]} bg={process.env.PUBLIC_URL + "images/bg/saintjoseph.jpg"} logo={process.env.PUBLIC_URL + "images/logos/saintjoseph.png"} />
                        <Card onClick={() => {
                            if (item === 1) {
                                setActive(!active);
                            }
                        }} school="lcs"  active={(item === 1 && active) ? "active" : "inactive"} order={(item === 1) ? 'c-second' : ((item === 0) ? 'c-third' : 'c-first')} info={infos[1]} bg={process.env.PUBLIC_URL + "images/bg/lcs.jpg"} logo={process.env.PUBLIC_URL + "images/logos/lcs.png"} />
                        <Card onClick={() => {
                            if (item === 0) {
                                setActive(!active);
                            }
                        }} school="mcmaster" active={(item === 0 && active) ? "active" : "inactive"} order={(item === 0) ? 'c-second' : ((item === 2) ? 'c-third' : 'c-first')} info={infos[0]} bg={process.env.PUBLIC_URL + "images/bg/mcmaster.jpg"} logo={process.env.PUBLIC_URL + "images/logos/mcmaster.png"} />
                    </div>
                </div>
                <div className="card-nav-container" onClick={() => {
                    let newidx = (item === 2) ? 0 : item + 1;
                    setItem(newidx);
                    setActive(false);
                }}>
                    <img className="card-forward" alt="forward" src={process.env.PUBLIC_URL + "images/logos/forward.svg"} style={{width: 75, height: 75}} />
                </div>
            </div>
        )
}