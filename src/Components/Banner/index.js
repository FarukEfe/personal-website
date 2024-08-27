import React from "react";

import "./styles.css";

class Banner extends React.Component {

    render() {
        return (
            <div className="banner-header">
                <div className="lowest">
                    <img alt="bglow" src={process.env.PUBLIC_URL + "/images/bg/istanbul.jpg"} />
                </div>
                <div className="middle">
                    <img alt="bgmid" src={process.env.PUBLIC_URL + "/images/bg/space.jpg"} />
                </div>
                <div className="filter" />
                <div className="highest">
                    <div className="decor-container-first">
                        <h1 className="text-first underdog-regular">Faruk Efe</h1>
                        <div className="decoration" />
                    </div>
                    <div className="decor-container-second">
                        <h1 className="text-last underdog-regular">Yencilek</h1>
                        <div className="decoration" />
                    </div>
                    <div className="banner-img-left"><img alt="img1" className="left-img" src={process.env.PUBLIC_URL + "/images/banner1.png"} style={{width: 350, height: 350}} /></div>
                    <div className="banner-img-right"><img alt="img2" className="right-img" src={process.env.PUBLIC_URL + "/images/banner2.png"} style={{width: 350, height: 350}} /></div>
                </div>
            </div>
        )
    }
}

export default Banner;