import React, { useState } from 'react';
import './dropdown.css';
import { ReactComponent as ArrowDownIcon } from '../../foundation/iconography/icon-arrow-down.svg';

const Dropdown = ({ label, items, isOpen, onToggle }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Для отслеживания активного элемента

  const handleItemClick = (index) => {
    // Если элемент уже активен, сбрасываем активность, иначе устанавливаем его как активный
    if (activeIndex === index) {
      setActiveIndex(null); // Сбрасываем состояние
    } else {
      setActiveIndex(index); // Устанавливаем активный элемент
    }
  };

  return (
    <div className="dropdown-container">
      <button
        className={`dropdown-button ${isOpen ? 'dropdown-button--opened' : 'dropdown-button--closed'}`}
        onClick={onToggle}
      >
        {label}
        <ArrowDownIcon className={`dropdown-icon ${isOpen ? 'icon-rotate' : ''}`} />
      </button>

      {/* Применение класса для открытого состояния */}
      <div className={`dropdown-list-wrapper ${isOpen ? 'dropdown-list-wrapper--open' : ''}`}>
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              className={`dropdown-item ${activeIndex === index ? 'dropdown-item--active' : 'dropdown-item--static'}`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
