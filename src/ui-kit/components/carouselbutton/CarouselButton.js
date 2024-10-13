import React, { useState } from 'react';
import './carouselbutton.css'; // Correct path for CarouselButton styles
import carouselImage from '../../assets/hero.png'; // Correct path for the image with file extension

const CarouselButton = ({ label }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    let buttonClass = 'carousel-button';
    if (isPressed) {
        buttonClass += ' carousel-button--pressed';
    } else if (isHovered) {
        buttonClass += ' carousel-button--hover';
    } else {
        buttonClass += ' carousel-button--static';
    }

    return (
        <button
            className={buttonClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <img src={carouselImage} alt="Carousel" className="carousel-image" />
            <div className="carousel-text">{label}</div> {/* Use label for text */}
        </button>
    );
};

export default CarouselButton;
