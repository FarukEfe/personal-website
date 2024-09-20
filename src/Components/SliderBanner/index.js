import React from "react";

import "./styles.css";

class SliderBanner extends React.Component {

    render() {
        return (
            <div className="banner underdog-regular">
                <h1>{this.props.title}</h1>
                <p>{this.props.emoji}</p>
            </div>
        )
    }
}

export default SliderBanner;