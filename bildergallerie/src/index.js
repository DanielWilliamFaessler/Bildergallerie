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
            <img src="assets/2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="assets/3.PNG" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/4.PNG" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/5.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/6.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/7.png" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/8.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/9.jpeg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src="assets/10.jpg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
);

