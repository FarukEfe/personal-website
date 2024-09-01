import React from "react";

import "./styles.css";

class Card extends React.Component {

    get_tags() {
        let tags = this.props.info.tags
        let spans = []
        for (let i=0;i<tags.length;i++) {
            let item = <span>{tags[i]}</span>
            spans.push(item)
        }
        return spans
    }

    render() {
        return (
            <div onClick={this.props.onClick} className={"card-container " + this.props.school + " " + this.props.order + " " + this.props.active}>
                <div className="card">
                    <div className="front">
                        <img className="card-bg"  alt="card" src={this.props.bg} />
                        <div className="card-front-layer" />
                        <img className="card-logo" alt="card" src={this.props.logo} />
                    </div>
                    <div className="gradient" />
                    <div className="back">
                        <div className="card-info">
                            <h1 className="stick-bold">{this.props.info.title}</h1>
                            <p>{this.props.info.location}</p>
                            <ul className="roboto-light">
                                <li>Degree 📜: {this.props.info.level}</li>
                                <li>Period ⌛: {this.props.info.period}</li>
                                <li>Average: 💯: {this.props.info.total_avg}</li>
                            </ul>
                            <div className="tags roboto-semibold">{this.get_tags()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;