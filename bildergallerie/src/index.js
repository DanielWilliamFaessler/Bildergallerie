import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Carousel>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/1.jpg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
);

