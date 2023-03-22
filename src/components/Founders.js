import React from 'react';
import "../components/styles/Founders.css";
import founder1 from '../components/assets/mario-and-adrian-a.jpg';
import founder2 from '../components/assets/mario-and-adrian-b.jpg';

const Founders = () => {
    return (
        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>About</h2>
                    <p>Little Lemon's founders Mario and Adrian. Both renowned in Mediterranean and Italian cousine, brought a fresh aprouch to people
                        who like to experience such delicacies here in American soil.</p>
                </div>
                <div className="section-right">
                    <div className="grid-container">
                        <div className="image-box1" key="image-box1">
                            <img src={founder1} alt="Founders 1" />
                        </div>
                        <div className="image-box2" key="image-box2">
                            <img src={founder2} alt="Founders 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founders;
