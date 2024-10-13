import React, { useState } from 'react';
import './services.css';
import CarouselButton from '../../components/carouselbutton/CarouselButton'; // Исправлен путь
import Title from '../../components/title/Title'; // Исправлен путь
import ArrowButton from '../../components/arrowbutton/ArrowButton'; // Исправлен путь
import ActionButton from '../../components/actionbutton/ActionButton'; // Исправлен путь
import ServiceCard from '../../components/servicecard/ServiceCard';

// Уникальные изображения для каждой карточки
import image1 from '../../assets/hero.png'; // Исправлен путь
import image2 from '../../assets/hero.png'; // Исправлен путь
import image3 from '../../assets/hero.png'; // Исправлен путь
import image4 from '../../assets/hero.png'; // Исправлен путь
import image5 from '../../assets/hero.png'; // Исправлен путь
import image6 from '../../assets/hero.png'; // Исправлен путь

const servicesData = ["Текущий ремонт", "Обслуживание", "Проектирование", "Консалтинг по строительству", "Инженерные системы", "Управление проектами", "Сметное проектирование", "Послепроектное обслуживание"];

const serviceCards = [
    [{ label: "Сантехнические работы", image: image1 }, { label: "Вентиляция и отопление", image: image2 }],
    [
        { label: "Электромонтажные работы", image: image3 },
        { label: "Сметное проектирование", image: image6 },
        { label: "Капитальный ремонт", image: image5 },
        { label: "Проектирование и планирование", image: image4 }
    ]
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (direction) => {
        if (direction === 'right' && currentIndex < servicesData.length - 5) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === 'left' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="services">
            <Title size="large" title="Услуги" />
            <div className="services-carousel">
                <div className="carousel-buttons">
                    {servicesData.slice(currentIndex, currentIndex + 10).map((label, index) => (
                        <CarouselButton key={index} label={label} />
                    ))}
                </div>
                <div className="navigation-buttons">
                    <ArrowButton direction="left" onClick={() => handleScroll('left')} disabled={currentIndex === 0} />
                    <ArrowButton direction="right" onClick={() => handleScroll('right')} disabled={currentIndex >= servicesData.length - 3} />
                </div>
            </div>
            <div className="services-lists-container">
                {serviceCards.map((group, index) => (
                    <div key={index} className="services-list">
                        {group.map(service => (
                            <ServiceCard key={service.label} variant="compact" size="extralarge" label={service.label} image={service.image} />
                        ))}
                    </div>
                ))}
            </div>
            <ActionButton variant="primary" iconPosition="right">Все проекты</ActionButton>
        </div>
    );
};

export default Services;
