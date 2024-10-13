// src/components/ArrowButton.js
import React, { useState } from 'react';
import './arrowbutton.css'; // Импорт стилей для ArrowButton
import arrowLeft from '../../foundation/iconography/icon-arrow-left.svg';
import arrowRight from '../../foundation/iconography/icon-arrow-right.svg';

const ArrowButton = ({ direction }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    // Определение класса на основе состояния и направления
    let buttonClass = 'arrow-button';
    if (isPressed) {
        buttonClass += ' arrow-button--pressed';
    } else if (isHovered) {
        buttonClass += ' arrow-button--hover';
    } else {
        buttonClass += ' arrow-button--static';
    }

    return (
        <button
            className={buttonClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <img src={direction === 'left' ? arrowLeft : arrowRight} alt={`Arrow ${direction}`} className="arrow-icon" />
        </button>
    );
};

export default ArrowButton;
