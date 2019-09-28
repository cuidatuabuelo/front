import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Landing = props => {
return (
    <Carousel transitionTime={1000} >
        <div style={{minHeight: '30vh', maxHeight: '30vh' }}>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div style={{minHeight: '30vh', maxHeight: '30vh' }}>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div style={{minHeight: '30vh', maxHeight: '30vh' }}>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div style={{minHeight: '30vh', maxHeight: '30vh' }}>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
        <div style={{minHeight: '30vh', maxHeight: '30vh' }}>
            <img src="/assets/enfermero.jpg" />
            <p className="legend">
            </p>
        </div>
    </Carousel>
);

};