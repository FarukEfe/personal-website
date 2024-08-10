import React from "react";

// This class is supposed to get the height of its parent element and adjust its height by keeping the same aspect ratio
class BgResizeable extends React.Component {

    constructor(props) {
        var img = new Image();
        img.src = process.env.PUBLIC_URL + "/images/bg/" + this.props.image;
        const ratio = img.height / img.height;
        
        this.state = {
            ratio: ratio
        }
    }
    
    get_ratio() {
        var img = new Image();
        img.src = process.env.PUBLIC_URL + "/images/bg/" + this.props.image;
        const ratio = img.height / img.height;
        return ratio;
    }

    render() {
        return (
            <img src={process.env.PUBLIC_URL + "/images/bg/" + this.props.image} />
        )
    }
}

export default BgResizeable;