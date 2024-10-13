// src/components/Header.js
import React from 'react';
import './header.css';
import logo from '../../foundation/iconography/logo.svg';  // Исправлен путь к логотипу
import Button from '../../components/button/Button';  // Исправлен путь к Button

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header__logo" />
            <nav className="header__nav">
                <Button variant="secondary">О компании</Button>
                <Button variant="secondary">Проекты</Button>
                <Button variant="secondary">Услуги</Button>
                <Button variant="secondary">Новости</Button>
                <Button variant="secondary">Блог</Button>
                <Button variant="secondary">Частые вопросы</Button>
                <Button variant="secondary">Контакты</Button>
                <Button variant="primary">8 966 378-95-98</Button>
            </nav>
        </header>
    );
};

export default Header;
