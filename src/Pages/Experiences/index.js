import React from "react";
import Entry from "../../Components/Entry";
import "./styles.css";

import { experience_list } from "../../Model/experience-model";


export default function Experiences(props) {

    let entries = [];
    for (let i=0;i<experience_list.length;i++) {
        let exp = experience_list[i];
        let entry = <Entry entry={exp} />;
        entries.push(entry);
    }
    
    return (
        <div id="experience">
            {entries}
        </div>
    )
}