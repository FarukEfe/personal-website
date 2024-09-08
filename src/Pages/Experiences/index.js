import React from "react";

import Entry from "../../Components/Entry";
import "./styles.css";

let sample_entry = {
    background: "binary-bg.jpg",
    title: "Hahaha",
    logo: "github.svg",
    tags: ["CNN","Tensorflow","Python"],
    url: "/",
    description: [
        "Developed an Convolutional Neural Network Model that classifies the brain tumor into categories from the MRI image.",
        "Developed an Convolutional Neural Network Model that classifies the brain tumor into categories from the MRI image."
    ]
}

export default function Experiences(props) {
    
    return (
        <div id="experiences">
            <Entry entry={sample_entry} />
        </div>
    )
}