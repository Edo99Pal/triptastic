import React from "react";

import './review.styles.scss';

const Review = props => (
    <div className="review">
        <div className="propic">
            <img src={props.picture} alt={props.name}/>
        </div>
        <h3>{props.name}</h3>
        <em>{props.description}</em>
    </div>
)

Review.defaultProps =  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default Review