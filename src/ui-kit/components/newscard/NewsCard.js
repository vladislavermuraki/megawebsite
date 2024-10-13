import React from 'react';
import './newscard.css';

const NewsCard = ({ title, description, image }) => {
    return (
        <div className="news-card">
            <div className="news-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="news-card-content">
                <h3 className="news-card-title">{title}</h3>
                <p className="news-card-description">{description}</p>
            </div>
        </div>
    );
};

export default NewsCard;
