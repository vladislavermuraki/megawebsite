import React, { useState } from 'react';
import './actionbutton.css'; // Импорт стилей для ActionButton
import { ReactComponent as ArrowRight } from '../../foundation/iconography/icon-arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../foundation/iconography/icon-arrow-left.svg';
import { ReactComponent as ArrowTop } from '../../foundation/iconography/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../foundation/iconography/icon-arrow-down.svg';

const ActionButton = ({ children, iconPosition = 'none', iconType = 'right', variant }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsPressed(false);
    };
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    let buttonClass = `action-button ${variant}`;
    if (isPressed) {
        buttonClass += ' action-button--pressed';
    } else if (isHovered) {
        buttonClass += ' action-button--hover';
    } else {
        buttonClass += ' action-button--static';
    }

    // Select the appropriate icon based on the iconType prop
    let IconComponent;
    switch (iconType) {
        case 'left':
            IconComponent = ArrowLeft;
            break;
        case 'right':
            IconComponent = ArrowRight;
            break;
        case 'top':
            IconComponent = ArrowTop;
            break;
        case 'down':
            IconComponent = ArrowDown;
            break;
        default:
            IconComponent = null;
    }

    // Render the icon only if the iconType is valid
    const icon = IconComponent ? <IconComponent className="action-icon" /> : null;

    return (
        <button
            className={buttonClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {iconPosition === 'left' && icon}
            {children}
            {iconPosition === 'right' && icon}
        </button>
    );
};

export default ActionButton;
