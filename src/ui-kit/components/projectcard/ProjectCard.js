// src/components/ProjectCard.js
import React from 'react';
import './projectcard.css';

const ProjectCard = ({ title, subtitle, image, size = 'compact' }) => {
  const cardClass = `project-card project-card--${size}`;

  return (
    <div className={cardClass}>
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
