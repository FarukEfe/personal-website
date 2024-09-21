import React from "react";

import "./styles.css";

class SliderCard extends React.Component {

    tags_html() {
        let tags = this.props.item.tags;
        let types = this.props.item.tag_types;
        let html = [];
        for (let i=0;i<tags.length;i++) {
            let item = tags[i];
            let type = types[i] ?? "other"
            let color = "#909090";
            switch (type) {

                case "activity":
                    color = "#0a6726";
                    break;
                case "role":
                    color = "#0a3d67";
                    break;
                case "athletics":
                    color = "#8f770d";
                    break;
                default:
                    color = "#909090";

            }
            let span = <span className="tag handjet-medium" style={{backgroundColor: color}}>{item}</span>;
            html.push(span)
        }
        return html;
    }

    render() {
        return (
            <div className="slider-card">
                <div className="slcard-content">
                    <div className="indent">
                        <div className="row-flex"><h1 className="playwrite-semibold">{this.props.item.title}</h1><p className="hdr playwrite-italic">{this.props.item.period}</p></div>
                        <div className="row-flex"><p className="hdr2 playwrite-italic">{this.props.item.degree}</p><p className="hdr2 playwrite-italic">{this.props.item.location}</p></div>
                        <div className="row-start"><p className="hdr2 playwrite-italic">{this.props.item.total_avg}</p></div>
                        <div className="tags">{this.tags_html()}</div>
                        <div><p className="text roboto-medium">{this.props.item.text}</p></div>
                    </div>
                </div>
                <div className="slcard-filter" />
                <img className="slcard-background" src={process.env.PUBLIC_URL + "/images/bg/" + this.props.background} alt="item-bg" />
            </div>
        )
    }
}

export const slcard_example = <SliderCard item={{
    title: "Lakefield College School",
    period: "September 2021 - May 2023",
    degree: "Ontario High School Diploma",
    location: "Peterborough ON, Canada",
    tags:[
        "Drone Club",
        "SIC of Computing",
        "SIC of Athletics",
        "SIC of CB House",
        "Varsity 1st Basketball Team"
    ],
    tag_types:[
        "activity",
        "role",
        "role",
        "role",
        "athletics"
    ],
    total_avg: "GPA: 4.0 / 4.0",
    text: "I first came to LCS in 2021 halfway through high-school. It was by far one of the best decisions I've made in my life. Aside from the given above, I've done many activities such as learning how to sail, camping & canoeing, etc. Most of all, I've built strong friendships in this tight-knit community."
}} background={"lcs.jpg"} />

export default SliderCard;