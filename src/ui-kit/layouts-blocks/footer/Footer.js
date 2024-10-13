import React from 'react';
import './footer.css';
import Button from '../../components/button/Button';  // Исправлен путь к Button

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <Button variant="primary">Компания</Button>
          <Button variant="secondary">История</Button>
          <Button variant="secondary">Миссия</Button>
          <Button variant="secondary">Статистика</Button>
          <Button variant="secondary">Контакты</Button>
          <Button variant="secondary">Вакансии</Button>
          <Button variant="secondary">Политика конфиденциальности</Button>
          <Button variant="secondary">Публичная оферта</Button>
        </div>
        <div className="footer-column">
          <Button variant="primary">Проекты</Button>
          <Button variant="secondary">Остоженка 25</Button>
          <Button variant="secondary">Коробейников 18</Button>
          <Button variant="secondary">Бакинская 26</Button>
          <Button variant="secondary">Верейская 5</Button>
          <Button variant="secondary">Часовая 21Б</Button>
          <Button variant="secondary">Университетская 2</Button>
          <Button variant="secondary">Плотников 2/8</Button>
          <Button variant="secondary">Нахимовский проспект</Button>
        </div>
        <div className="footer-column">
          <Button variant="primary">Социальные сети</Button>
          <Button variant="secondary">ВКонтакте</Button>
          <Button variant="secondary">Телеграм</Button>
        </div>
        <div className="footer-column">
          <Button variant="primary">Пресса</Button>
          <Button variant="secondary">Новости</Button>
          <Button variant="secondary">Блог</Button>
        </div>
      </div>
      <div className="footer-legal">
        <p>Все права на публикуемые на сайте megaconstructing.ru материалы принадлежат ООО «МЕГА» © 2023 — 2024.</p>
        <p>Пользователь уведомлен, что любые материалы, размещенные на сайте, являются объектами интеллектуальной собственности ООО «МЕГА» (правообладателя). Пользователь не вправе без предварительного письменного разрешения правообладателя осуществлять какие-либо действия с объектами интеллектуальной собственности.</p>
        <p>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ.</p>
      </div>
    </footer>
  );
};

export default Footer;
