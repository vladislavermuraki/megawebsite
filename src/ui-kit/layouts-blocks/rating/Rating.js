import React from 'react';
import './rating.css'; // Подключаем стили
import image from '../../assets/hero.png'; // Импортируем изображение по правильному пути

const Rating = () => {
  return (
    <div className="rating-wrapper">
      <div className="rating-content">
        <p className="rating-text">
        Строительные проекты выполняются качественно и в срок, что особенно важно в сфере строительства и ремонта. Команда настоящих профессионалов всегда на связи, предлагает оптимальные решения и тщательно контролирует все этапы работ.
        </p>
      </div>
      <div className="rating-info">
        <div className="rating-image">
          <img src={image} alt="Фото автора отзыва" />
        </div>
        <div className="rating-subtitle">
          <h3 className="title">Наталья Савостьянова</h3>
          <p className="subtitle">Фалкондэйл Девелопмент Лимитед</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
