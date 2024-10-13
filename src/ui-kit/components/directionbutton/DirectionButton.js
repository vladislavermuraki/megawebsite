import React, { useState } from 'react';
import './directionbutton.css'; // Импортируем стили для кнопки DirectionButton

const DirectionButton = ({ children, variant = 'primary' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsPressed(false);
    };
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    let buttonClass = `direction-button direction-button--${variant}`;
    if (isPressed) {
        buttonClass += ' direction-button--pressed';
    } else if (isHovered) {
        buttonClass += ' direction-button--hover';
    } else {
        buttonClass += ' direction-button--static';
    }

    return (
        <button
            className={buttonClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {children}
        </button>
    );
};

export default DirectionButton;
