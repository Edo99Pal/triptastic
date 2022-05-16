import React from "react";

import './first.styles.scss';

const FirstSection = () => (
    <section className="first-section">
    <div className="row">
            <div className="first-section-text col-md-8">
                <h2>Organize the perfect trip</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec libero auctor ex imperdiet tempus. Suspendisse eu velit eu nibh egestas placerat. Sed nec sodales magna. Donec vel fermentum mi. Nullam consectetur urna id venenatis maximus.</p>
            </div>
            <div className="first-section-images col-md-4">
                <img src={require("../../images/pexels-andrea-piacquadio-3830880.jpg")} id="first-image"/>
                <img src={require("../../images/pexels-dominika-gregušová-672532.jpg")} id="second-image"/>
                <img src={require("../../images/pexels-pixabay-2363.jpg")} id="third-image"/>
            </div>
        </div>
    </section>
)

export default FirstSection;