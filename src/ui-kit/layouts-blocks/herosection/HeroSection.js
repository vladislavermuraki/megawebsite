// src/components/HeroSection.js
import React from 'react';
import './herosection.css'; // Импорт стилей для hero section
import ActionButton from '../../components/actionbutton/ActionButton'; // Исправлен путь к кнопке ActionButton
import image from '../../assets/hero.png'; // Исправлен путь к изображению hero

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Построим, отремонтируем, обслужим</h1>
                <p className="hero__text">
                Мы занимаемся строительством, ремонтом и обслуживанием зданий. Мы выполняем работы разной сложности и обеспечиваем надежное поддержание ваших объектов в хорошем состоянии.
                </p>
                <ActionButton variant="primary" iconPosition="right">Получить консультацию</ActionButton>
            </div>
            <div className="hero__image img">
                <img src={image} alt="Hero" />
            </div>
        </section>
    );
};

export default HeroSection;
