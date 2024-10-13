import React from 'react';
import './servicecard.css';

const ServiceCard = ({ label, image, variant, size }) => {
    const cardClass = `services-card services-card--${variant} services-card--${size}`;
    return (
        <div className={cardClass} style={{ backgroundImage: `url(${image})` }}>
            <p>{label}</p>
        </div>
    );
};

export default ServiceCard;
