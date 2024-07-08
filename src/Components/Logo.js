import React from 'react';
import lg from ''

class Logo extends React.Component {
    render() {
        return ( <img src={window.location.origin + "/" + this.props.image}/> )
    };
    
}