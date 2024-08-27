import React, { useState } from "react";

import "./styles.css";

function Slider(components) {

    const [item,setItem] = useState(0);

    const displayItems = () => {

    }

    const navigateTo = () => {

    }

    return (
        <div className="slider">
            <div className="navigator">
                
            </div>
            <div className="items">
                {displayItems}
            </div>
        </div>
    )
}