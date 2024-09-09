import React from "react";

import "./styles.css";

class Entry extends React.Component {

    get_description() {
        // This function will go thru every single item in dictionary to get entry list items and display them
        let d_list = this.props.entry.description;
        let list_items = [];
        for (let i=0;i<d_list.length;i++) {
            let item = d_list[i];
            let tag = <li className="entry-desc-item stick-medium">{item}</li>;
            list_items.push(tag);
        }
        return <ul>
            {list_items}
        </ul>;
    }

    get_tags() {
        // Gets tags for a given experience for display
        let tag_list = this.props.entry.tags;
        let html_tags = [];
        for (let i=0;i<tag_list.length;i++) {
            let data = tag_list[i];
            let html_item = <span className="entry-tags">{data}</span>;
            html_tags.push(html_item);
        }

        return html_tags;
    }

    render() {
        return (
            <div className="entry">
                <div className="entry-info">
                    <div className="title-row">
                        <div className="push-left">
                            <h1 className="entry-title stick-semibold">{this.props.entry.title}</h1>
                            <a className="entry-source" href={this.props.entry.url}><img alt="" src={process.env.PUBLIC_URL + "/images/socials/" + this.props.entry.logo} style={{width: 25, height: 25}} /></a>
                        </div>
                        <div className="push-right">
                            <h2 className="entry-period stick-medium">{this.props.entry.period}</h2>
                        </div>
                    </div>
                    <div className="tags">
                        {this.get_tags()}
                    </div>
                    <div className="entry-items">
                        {this.get_description()}
                    </div>
                </div>
                <div className="entry-filter" />
                <img className="entry-background" alt="entry-background" src={process.env.PUBLIC_URL + "/images/bg/entry-bgs/" + this.props.entry.background} />
            </div>
        )
    }
}

export default Entry;