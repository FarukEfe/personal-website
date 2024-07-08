import React from 'react';
import lg from ''

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img style={mystyle} src={window.location.origin + "/yuniks-logo.png"}/>
            </div>
        )
    };
    
}