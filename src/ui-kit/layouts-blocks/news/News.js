import React, { useState } from 'react';
import './news.css'; // Импорт стилей для News
import Title from '../../components/title/Title'; // Исправлен путь к компоненту Title
import ArrowButton from '../../components/arrowbutton/ArrowButton'; // Исправлен путь к компоненту ArrowButton
import NewsCard from '../../components/newscard/NewsCard'; // Исправлен путь к компоненту NewsCard
import ActionButton from '../../components/actionbutton/ActionButton'; // Исправлен путь к компоненту ActionButton
import newsImage1 from '../../assets/hero.png'; // Исправлен путь к изображению
import newsImage2 from '../../assets/hero.png'; // Исправлен путь к изображению

const newsData = [
    { title: 'Проекты на будущее: ООО "МЕГА" Анонсирует новые проекты на 2024 год', description: "16 сентября, 2024 г.", image: newsImage1 },
    { title: 'ООО "МЕГА" завершает амбициозный проект жилого комплекса в центре Москвы', description: "18 сентября, 2024 г.", image: newsImage2 },
    { title: "Новость 3", description: "Описание новости 3", image: newsImage1 },
    { title: "Новость 4", description: "Описание новости 4", image: newsImage2 },
    { title: "Новость 5", description: "Описание новости 5", image: newsImage1 },
    { title: "Новость 6", description: "Описание новости 6", image: newsImage2 }
];

const News = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const handleScroll = (direction) => {
        const cardCount = newsData.length;
        const visibleCards = 2; // Отображаем две карточки одновременно
        if (direction === 'right' && scrollIndex < cardCount - visibleCards) {
            setScrollIndex(scrollIndex + 1);
        } else if (direction === 'left' && scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
        }
    };

    return (
        <div className="news-container">
            <div className="news-header">
                <Title size="large" title="Новости" />
                <div className="news-navigation">
                    <ArrowButton direction="left" onClick={() => handleScroll('left')} disabled={scrollIndex === 0} />
                    <ArrowButton direction="right" onClick={() => handleScroll('right')} disabled={scrollIndex >= newsData.length - 2} />
                </div>
            </div>
            <div className="news-cards">
                {newsData.slice(scrollIndex, scrollIndex + 4).map((newsItem, index) => (
                    <NewsCard 
                        key={index} 
                        title={newsItem.title} 
                        description={newsItem.description} 
                        image={newsItem.image} 
                    />
                ))}
            </div>
            <ActionButton variant="primary" iconPosition="right">Все новости</ActionButton>
        </div>
    );
};

export default News;
