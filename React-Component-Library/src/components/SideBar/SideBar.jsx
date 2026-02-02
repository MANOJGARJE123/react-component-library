import React from 'react';  
import './SideBar.css';

const SideBar = ({ isOpen, onOpen, onClose, children }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-open">
        <button className='sidebar-open-button' onClick={onOpen}>*</button>
      </div>

      <div className={`sidebar-panel ${isOpen ? 'open' : 'closed'}`}>
        <button className="sidebar-close-button" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default SideBar;