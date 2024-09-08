import React from "react";

import "./styles.css";

class Entry extends React.Component {

    get_description() {
        // This function will go thru every single item in dictionary to get entry list items and display them
        return <li></li>
    }

    render() {
        return (
            <div className="entry">
                <div className="entry-info">
                    <div className="title-row">
                        <div className="push-left">
                            <h1 className="entry-title">{this.props.entry.title}</h1>
                            <a className="entry-source" href={this.props.entry.url}><img alt="" src={process.env.PUBLIC_URL + "/images/socials/" + this.props.entry.logo} style={{width: 25, height: 25}} /></a>
                        </div>
                        <div className="push-right">
                            <h2 className="period">{this.props.entry.title}</h2>
                        </div>
                    </div>
                    <div className="entry-items">
                        <ul>{this.get_description()}</ul>
                    </div>
                </div>
                <div className="entry-filter" />
                <img className="entry-background" alt="entry-background" src={process.env.PUBLIC_URL + "/images/bg/entry-bgs/" + this.props.entry.background} />
            </div>
        )
    }
}

export default Entry;