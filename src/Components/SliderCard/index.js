import React from "react";

import "./styles.css";

class SliderCard extends React.Component {

    // this.props.item.logo
    // this.props.item.tags
    render() {
        return (
            <div className="slider-card">
                <div className="slcard-content">
                    <h1>{this.props.item.title}</h1>
                    <p>{this.props.item.degree}</p>
                    <p>{this.props.item.period}</p>
                    <p>{this.props.item.total_avg}</p>
                </div>
                <div className="slcard-filter" />
                <img className="slcard-background" src={process.env.PUBLIC_URL + "/images/bg/" + this.props.background} />
            </div>
        )
    }
}

export default SliderCard;