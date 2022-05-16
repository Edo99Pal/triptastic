import React from "react";
import './fifth.styles.scss';

const FifthSection = () => (
    <div className="fifth-section">
        <div className="form">
            <h3 class="contact-us">Book your holiday!</h3>
                <div className="input full-name">
                    <input type="text" name="full-name" placeholder="Full Name"/>
                </div>
                <div className="input email">
                    <input type="text" name="email" placeholder="Email Address"/>
                </div>
                    <div class="form-group">
                        <div class="radio-group">
                            <input type="radio" class="radio-input" id="barcelona" name="city"/>
                            <label for="barcelona" class="radio-label">
                                <span class="radio-button"></span>
                                Barcelona
                            </label>
                        </div>
                        <div class="radio-group">
                            <input type="radio" class="radio-input" id="paris" name="city"/>
                            <label for="paris" class="radio-label">
                                <span class="radio-button"></span>
                                Paris
                            </label>
                        </div>
                        <div class="radio-group">
                            <input type="radio" class="radio-input" id="london" name="city"/>
                            <label for="london" class="radio-label">
                                <span class="radio-button"></span>
                                London
                            </label>
                        </div>
                    </div>
                    <button>Send</button>
                </div>
        <div class="color"></div>
    </div>
)

export default FifthSection;