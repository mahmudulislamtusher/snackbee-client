import React from 'react';
import Carousel from 'react-bootstrap/Carousel'  
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import './Slider.css'

const Slider = () => {
    return (
        <div className="container my-4">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={one} style={{"height": "320px"}} alt="First slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={two} style={{"height": "320px"}}  alt="Second slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={three} style={{"height": "320px"}}  alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;