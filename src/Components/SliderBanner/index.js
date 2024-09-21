import React from "react";

import "./styles.css";

class SliderBanner extends React.Component {

    render() {
        return (
            <div className="banner">
                <div className="label">
                    <h1 className="underdog-regular">{this.props.title}</h1>
                    <p>{this.props.emoji}</p>
                </div>
                <img className="background" alt="slider-banner" src={process.env.PUBLIC_URL + "/images/bg/banner-bgs/" + this.props.background} />
            </div>
        )
    }
}

export default SliderBanner;