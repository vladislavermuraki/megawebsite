import React from 'react';
import './contacts.css'; 
import DirectionButton from '../../components/directionbutton/DirectionButton'; // Скорректирован путь к DirectionButton

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contact-card">
        <p>Много интересного о строительстве</p>
        <DirectionButton variant="secondary">Перейти в блог</DirectionButton>
      </div>
      <div className="contact-card">
        <p>+7 966 378-95-98</p>
        <DirectionButton variant="primary">Позвоните мне</DirectionButton>
      </div>
      <div className="contact-card">
        <p>Есть заявка? Рассчитаем и обсудим</p>
        <DirectionButton variant="primary">Оставить заявку</DirectionButton>
      </div>
    </div>
  );
};

export default Contacts;
