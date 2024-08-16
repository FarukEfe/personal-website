import React from "react";

import "./styles.css";

class Card extends React.Component {
    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <div className="front">
                        <img className="card-bg"  alt="card" src={this.props.bg} />
                        <div className="card-front-layer" />
                        <img className="card-logo" alt="card" src={this.props.logo} />
                    </div>
                    <div className="gradient" />
                    <div className="back">
                        <div className="card-info">
                            <h1 className="stick-bold">{this.props.info.title + "(" + this.props.info.period + ")"}</h1>
                            <ul className="stick-medium">
                                <li>{this.props.info.level}</li>
                                <li>{this.props.info.off_curriculum}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//<div className="gradient" />
export default Card;