import React from "react";

import "./styles.css";

class AboutMe extends React.Component {

    render() {
        return (
            <div className="aboutme">
                <h1 className="title stick-medium">This is a placeholder text.</h1>
                <div className="paragraphs">
                    <p className="middle roboto-light">Also this.Also this.Also this.Also this.Also this.Also this.Also this.Also this.Also this.Also this.Also this.Also this.Also this.Also this.</p>
                    <p className="bottom roboto-light">And this.And this.And this.And this.And this.And this.And this.And this.And this.And this.And this.And this.And this.And this.And this.And this.</p>
                </div>
            </div>
        )
    }
}

export default AboutMe;