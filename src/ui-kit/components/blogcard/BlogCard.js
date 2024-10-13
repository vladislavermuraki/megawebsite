import React from 'react';
import './blogcard.css';

const BlogCard = ({ title, image }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
