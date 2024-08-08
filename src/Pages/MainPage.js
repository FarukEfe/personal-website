import React from "react";

/* CSS */
import "./styles/mainstyles.css";

/* Components */
import Card from "../Components/Card";
import Banner from "../Components/Banner";

export default function MainPage() {
    return (
        <div>
            <Banner />
            <div className="top-clips">
                <div className="tc-head">
                    <text>Top Clips Of The Week</text>
                    <div className="rank-flex">
                        <text>#1</text>
                        <text>#2</text>
                        <text>#3</text>
                    </div>
                </div>
                <div className="card-flex">
                    <Card text="YuniksNaberDiyo" />
                    <Card text="FANaberDiyo" />
                </div>
            </div>
        </div>
    )
}