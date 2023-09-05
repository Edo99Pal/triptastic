import React from "react";
import './card.styles.scss';

const Card = props => (
        <div className="card">
            <div className="front-card">
                <img src={ props.imageUrl } alt={ props.city }/>
                <h4>{ props.city }</h4>
                <ul>
                    <li>{ props.details[0] }</li>
                    <li>{ props.details[1] }</li>
                </ul>
            </div>
            <div className="card back-card">
                <h3>€{ props.price }</h3>
                <a href="#">BUY</a>
            </div>
        </div>
    )


export default Card;