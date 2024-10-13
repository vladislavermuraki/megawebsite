import React, { useState } from 'react';
import './button.css'; // Импорт стилей для кнопки

const Button = ({ children, variant }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseEnter = () => setIsHovered(true); // Устанавливаем Hover в true
    const handleMouseLeave = () => {
        setIsHovered(false); // Устанавливаем Hover в false
        setIsPressed(false); // Убираем Pressed при уходе курсора
    };
    const handleMouseDown = () => setIsPressed(true); // Устанавливаем Pressed в true
    const handleMouseUp = () => setIsPressed(false); // Устанавливаем Pressed в false

    // Определение класса в зависимости от состояния и типа кнопки
    let buttonClass = `button ${variant}`;
    if (isPressed) {
        buttonClass += ' button--pressed'; // Класс для нажатой кнопки
    } else if (isHovered) {
        buttonClass += ' button--hover'; // Класс для кнопки с наведением
    } else {
        buttonClass += ' button--static'; // Класс для обычного состояния кнопки
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

export default Button;
