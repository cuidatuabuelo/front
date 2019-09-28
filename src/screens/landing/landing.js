import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const landing = props => {
return (

    <Carousel transitionTime={1000} style={{minHeight: '30vh', maxHeight: '30vH' }}>
        <div>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
    </Carousel>

);

};