import React from "react";

import "./styles.css";

class Card extends React.Component {
    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <div className="front"></div>
                    <div className="back">
                        <h1>Back of Card</h1>
                        <p>Add your info here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;