import React from "react";

class Logo extends React.Component {
    render() {
        return <img src={window.location.origin + "/" + this.props.image}/>
    };
}

export default Logo;