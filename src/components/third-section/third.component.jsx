import React from "react";

import './third.styles.scss';

import Card from "../cards/card.component";

import Barcellona from "../../images/barcellona.jpg"
import Paris from "../../images/paris.jpg"
import London from "../../images/london.jpg"

const ThirdSection = () => {
    const trips = [
        {
            city: "Barcelona",
            imageUrl: Barcellona,
            details: [
                "3 days",
                "2 guides"                
            ],
            price: 800
        },
        {
            city: "Paris",
            imageUrl: Paris,
            details: [
                "4 days",
                "1 guide"                
            ],
            price: 1100
        },
        {
            city: "London",
            imageUrl: London,
            details: [
                "7 days",
                "4 guides"                
            ],
            price: 1400
        },
    ]
    return(
        <div className="third-section">
            <h2>Trips</h2>
         { trips.map(trip => <Card city={trip.city} imageUrl={trip.imageUrl} details={trip.details} price={trip.price}/>) }
         </div>
    )
}

export default ThirdSection;