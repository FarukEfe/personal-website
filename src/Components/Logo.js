import React from "react";

class Logo extends React.Component {
    render() {
        const dir = process.env.PUBLIC_URL + "/images/" + this.props.image
        console.log(dir)
        return <img style={this.props.style} src={dir} />
    };
}

export default Logo;