import React from "react";

import Entry from "../../Components/Entry";
import "./styles.css";

let sample_entry = {
    title: "Hahaha",
    logo: "github.svg",
    link: "/",
    background: "binary-bg.jpg"
}

export default function Experiences(props) {
    
    return (
        <div id="experiences">
            <Entry entry={sample_entry} />
        </div>
    )
}