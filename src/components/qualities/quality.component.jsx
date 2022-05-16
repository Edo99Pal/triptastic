import React from "react";

import './quality.styles.scss';

const Quality = props => (
    <div className="quality">
        <i className={`fa  ${props.className}`}></i>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
)

Quality.defaultProps = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim mi. Aliquam erat volutpat. Mauris ante tellus, pulvinar in leo sed, pellentesque fringilla est. Curabitur mattis, felis ac convallis laoreet, tortor nisi condimentum purus, eget dignissim nisi mauris id eros. Aenean sit amet urna augue. Suspendisse cursus velit sit amet elit pretium sodales."
}

export default Quality;