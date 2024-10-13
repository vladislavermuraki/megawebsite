import React, { useState } from 'react';
import './projects.css';
import Title from '../../components/title/Title.js';
import Dropdown from '../../components/dropdown/Dropdown.js';
import ProjectCard from '../../components/projectcard/ProjectCard.js';
import ActionButton from '../../components/actionbutton/ActionButton.js';
import DirectionButton from '../../components/directionbutton/DirectionButton.js';

// Импорт уникальных изображений
import projectImage1 from '../../assets/hero.png';
import projectImage2 from '../../assets/hero.png';
import projectImage3 from '../../assets/hero.png';

const projectDropdownSector = ['Государственный', 'Коммерческий', 'Некоммерческий'];
const projectDropdownStatus = ['Сдано в эксплуатацию', 'Стадия строительства', 'Стадия согласования'];
const projectDropdownLocation = ['Москва', 'Ленинградская область', 'Тульская область', 'Обнинск'];
const projectDropdownType = [
  'Отопление и вентиляция',
  'Сантехнические работы',
  'Электромонтажные работы',
  'Капитальный ремонт',
  'Проектирование и строительство инженерных систем',
  'Фасадные и кровельные работы',
  'Сметное проектирование и расчет'
];

const projectCardsFirstBlock = [
  { title: "Остоженка 25 с.1", subtitle: "Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.", image: projectImage1, size: 'compact' },
  { title: "Коробейников 18", subtitle: "Коробейников 18 — кирпичный жилой дом с уникальной атмосферой в престижном районе Москвы.", image: projectImage2, size: 'compact' },
];

const projectCardsSecondBlock = [
  { title: "Бакинская 26", subtitle: "Бакинская 26 — Городская клиническая больница имени Буянова, предоставляющая качественную медицинскую помощь в Южном округе Москвы.", image: projectImage3, size: 'large' },
];

const projectCardsTertiaryBlock = [
  { title: "Верейская 5", subtitle: "Верейская 5 — Аминьевское депо, современный транспортный узел с развитой инфраструктурой в западной части Москвы.", image: projectImage1, size: 'compact' },
  { title: "Часовая 21Б", subtitle: "Цифровая онлайн-школа, предлагающая современные образовательные решения для учеников любого возраста.", image: projectImage2, size: 'compact' },
];

const Projects = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="projects-container">
      <Title
        size="large"
        subtitleSize="large"
        hasSubtitle={true}
        title="Наши проекты"
        subtitle="То, чего мы не стыдимся. Наша гордость и усилия."
      />

      <div className="projects-dropdowns">
        <DirectionButton variant="primary">На карте</DirectionButton>
        <Dropdown label="Сектор" items={projectDropdownSector} isOpen={openDropdown === 'sector'} onToggle={() => handleDropdownToggle('sector')} />
        <Dropdown label="Статус проекта" items={projectDropdownStatus} isOpen={openDropdown === 'status'} onToggle={() => handleDropdownToggle('status')} />
        <Dropdown label="Локация" items={projectDropdownLocation} isOpen={openDropdown === 'location'} onToggle={() => handleDropdownToggle('location')} />
        <Dropdown label="Тип работ" items={projectDropdownType} isOpen={openDropdown === 'type'} onToggle={() => handleDropdownToggle('type')} />
      </div>

      {/* Блок с проектами первого уровня */}
      <div className="projects-lists-container">
        {projectCardsFirstBlock.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            subtitle={project.subtitle} 
            image={project.image} 
            size={project.size} 
          />
        ))}
      </div>

      {/* Блок с проектами второго уровня */}
      <div className="projects-lists-container">
        {projectCardsSecondBlock.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            subtitle={project.subtitle} 
            image={project.image} 
            size={project.size} 
          />
        ))}
      </div>
      <div className="projects-lists-container">
        {projectCardsTertiaryBlock.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            subtitle={project.subtitle} 
            image={project.image} 
            size={project.size} 
          />
        ))}
      </div>

      <ActionButton variant="primary" iconPosition="right">Все проекты</ActionButton>
    </div>
  );
};

export default Projects;
