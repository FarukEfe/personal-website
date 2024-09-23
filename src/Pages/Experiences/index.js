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

    let classes = ["item-1","item-2","item-3"];
    let cells = classes.map((val, idx, arr) => <div className={val}></div>)
    
    return (
        <div id="experience">
            <div className="item-1"></div>
            <div className="item-2"></div>
            <div className="item-3"></div>
        </div>
    )
}