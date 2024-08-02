import React from "react";

import "./styles/cardstyle.css";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <button className="card-tag">{this.props.text}</button>
            </div>
        )
    }
}

export default Card;