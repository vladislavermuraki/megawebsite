import React from 'react';
import './title.css'; // Импорт стилей для Title

const Title = ({ 
    size = 'large', 
    subtitleSize = 'medium', 
    hasSubtitle = false, 
    title, 
    subtitle 
}) => {
    // Определение класса для заголовка на основе размера
    const titleClass = `title title--${size}`;
    
    // Определение класса для подзаголовка на основе размера
    const subtitleClass = `subtitle subtitle--${subtitleSize}`;

    return (
        <div className={`title-container ${hasSubtitle ? 'title--withsubtitle' : 'title--withoutsubtitle'}`}>
            <h1 className={titleClass}>{title}</h1>
            {hasSubtitle && <p className={subtitleClass}>{subtitle}</p>}
        </div>
    );
};

export default Title;
