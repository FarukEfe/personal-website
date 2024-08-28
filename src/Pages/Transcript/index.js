import React from "react";

import "./styles.css";

export default function Transcript(props) {
    return (
        <div className="transcript">
            <iframe src={process.env.PUBLIC_URL + "files/mcmaster-transcript-summer2024.pdf"} width="100%" height="auto" title="Efe Yencilek, McMaster Transcript" />
        </div>
    )
}
