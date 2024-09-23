import React from "react";

import "./styles.css";

class GridItem extends React.Component {

    // props includes 'item' (obj) for information, and 'display' (bool) for what content is shown

    // Brief display with background and title
    iconed() {
        return (
            <>
                <h1 className="icon-title underdog-regular"></h1>
            </>
        )
    }

    // Full display
    full() {
        return (
            <>
                <div className="h-flex">{null /* Here should come title, github or kaggle links, and project work dates */}</div>
                <div>
                    <ul>
                        {null /* Here should come bullet points on the project */}
                    </ul>
                    <img alt="" src="" />
                </div>
            </>
        )
    }

    render() {
        return (
            <div className="grid-item">
                <div className="item-content">
                    {(this.props.display) ? this.full() : this.iconed()}
                </div>
                <div className="item-filter" />
                <img className="item-background" alt="" src={process.env.PUBLIC_URL + '/images/bg/project-bgs/' + this.props.item.background} />
            </div>
        )
    }
}