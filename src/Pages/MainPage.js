import React from "react";

/* Components */
import Card from "../Components/Card";
import Banner from "../Components/Banner";

export default function MainPage() {
    return (
        <div>
            <Banner />
            <div className="top-clips">
                <div className="tc-head">

                </div>
                <div className="card-flex">
                    <Card text="YuniksNaberDiyo" />
                    <Card text="FANaberDiyo" />
                </div>
            </div>
        </div>
    )
}