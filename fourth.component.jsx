import React from "react";

import './fourth.styles.scss';

import Lara from '../../images/lara.jpg';
import Richard from '../../images/richard.jpg';
import Justin from '../../images/justin.jpg';
import Review from "../reviews/review.component";

const FourthSection = () => {
    const reviews = [
        {
            name: 'Lara',
            picture: Lara
        },
        {
            name: 'Richard',
            picture: Richard
        },
        {
            name: 'Justin',
            picture: Justin
        },
    ];
    return(
        <div className="fourth-section">
            <h2>Reviews</h2>
            { reviews.map(review => <Review name={review.name} picture={review.picture}/>) }
        </div>
    )
}

export default FourthSection;