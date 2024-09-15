import React from "react";

import "./styles.css";

class SliderCard extends React.Component {

    tags_html() {
        let tags = this.props.item.tags;
        let html = [];
        for (let i=0;i<tags.length;i++) {
            let item = tags[i];
            let span = <span className="tag">{item}</span>;
            html.push(span)
        }
        return html;
    }

    render() {
        return (
            <div className="slider-card">
                <div className="slcard-content">
                    <div className="indent">
                        <div className="row-flex"><h1 className="roboto-medium">{this.props.item.title}</h1><p className="hdr roboto-light">{this.props.item.period}</p></div>
                        <div className="row-flex"><p className="hdr roboto-light">{this.props.item.degree}</p><p className="hdr roboto-light">{this.props.item.location}</p></div>
                        <div className="row-start"><p className="roboto-light">{this.props.item.total_avg}</p></div>
                        <div className="tags">{this.tags_html()}</div>
                        <div></div>
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
    total_avg: "total average"
}} background={"lcs.jpg"} />

export default SliderCard;