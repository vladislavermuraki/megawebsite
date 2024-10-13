import React, { useState } from 'react';
import './blog.css'; 
import Title from '../../components/title/Title'; // Скорректирован путь к Title
import ArrowButton from '../../components/arrowbutton/ArrowButton'; // Скорректирован путь к ArrowButton
import BlogCard from '../../components/blogcard/BlogCard'; // Скорректирован путь к BlogCard
import ActionButton from '../../components/actionbutton/ActionButton'; // Скорректирован путь к ActionButton
import blogImage1 from '../../assets/hero.png'; // Скорректирован путь к изображениям
import blogImage2 from '../../assets/hero.png'; // Скорректирован путь к изображениям

// Blog data
const blogData = [
    { title: 'Строительный взгляд', image: blogImage1 },
    { title: 'Ремонт и реставрация', image: blogImage2 },
    { title: 'Новость 3', image: blogImage1 },
    { title: 'Новость 4', image: blogImage2 },
];

const Blog = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const handleScroll = (direction) => {
        const cardCount = blogData.length;
        const visibleCards = 2;
        if (direction === 'right' && scrollIndex < cardCount - visibleCards) {
            setScrollIndex(scrollIndex + 1);
        } else if (direction === 'left' && scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
        }
    };

    return (
        <div className="blog-container">
            <div className="blog-header">
                <Title size="large" title="Блог" />
                <div className="blog-navigation">
                    <ArrowButton direction="left" onClick={() => handleScroll('left')} disabled={scrollIndex === 0} />
                    <ArrowButton direction="right" onClick={() => handleScroll('right')} disabled={scrollIndex >= blogData.length - 2} />
                </div>
            </div>
            <div className="blog-cards">
                {blogData.slice(scrollIndex, scrollIndex + 4).map((blogItem, index) => (
                    <BlogCard 
                        key={index} 
                        title={blogItem.title} 
                        image={blogItem.image} 
                    />
                ))}
            </div>
            <ActionButton variant="primary" iconPosition="right">Весь блог</ActionButton>
        </div>
    );
};

export default Blog;
