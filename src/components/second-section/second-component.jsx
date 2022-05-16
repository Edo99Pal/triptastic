import React from "react";
import Quality from "../qualities/quality.component";

import './second.styles.scss';

const SecondSection = () => {
    const qualities = [
     {
        className: "fa-bookmark",
        title: "Reliable"
     },
     {
        className: "fa-gem",
        title: "Luxurious"
     },
     {
        className: "fa-check",
        title: "Well Organized"
     },
     {
        className: "fa-star",
        title: "Memorable Trips"
     }
    ]
    return(
        <section className="second-section">
            <div className="container">
                { qualities.map(quality => <Quality title={quality.title} className={quality.className}/>) }
            </div>
        </section>
    )
}

export default SecondSection;