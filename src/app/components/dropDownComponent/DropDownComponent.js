import React, { useState } from 'react';
import './DropDownComponent.css'
import { SlArrowDown } from "react-icons/sl";
import LongCategoryContent from '../longCategoryContent/LongCategoryContent';
import CategoryContent from '../categoryContent/CategoryContent';

function Dropdown({categoryType, categorytitle}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className='categorytitle'>{categorytitle}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}><SlArrowDown /></span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
        {categoryType==="category content" ? <CategoryContent /> :
        <LongCategoryContent/>}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
