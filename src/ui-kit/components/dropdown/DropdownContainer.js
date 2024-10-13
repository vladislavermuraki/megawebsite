import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Импорт компонента Dropdown

const DropdownContainer = () => {
    const [openDropdownId, setOpenDropdownId] = useState(null); // Храним ID открытого Dropdown

    const handleDropdownToggle = (id) => {
        if (openDropdownId === id) {
            setOpenDropdownId(null); // Закрыть, если этот Dropdown уже открыт
        } else {
            setOpenDropdownId(id); // Открыть выбранный Dropdown
        }
    };

    const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <div>
            <Dropdown
                id="dropdown1"
                label="Dropdown 1"
                items={dropdownItems}
                isOpen={openDropdownId === 'dropdown1'}
                onToggle={() => handleDropdownToggle('dropdown1')}
            />
            <Dropdown
                id="dropdown2"
                label="Dropdown 2"
                items={dropdownItems}
                isOpen={openDropdownId === 'dropdown2'}
                onToggle={() => handleDropdownToggle('dropdown2')}
            />
            <Dropdown
                id="dropdown3"
                label="Dropdown 3"
                items={dropdownItems}
                isOpen={openDropdownId === 'dropdown3'}
                onToggle={() => handleDropdownToggle('dropdown3')}
            />
        </div>
    );
};

export default DropdownContainer;
