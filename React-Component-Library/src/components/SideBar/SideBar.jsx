import './SideBar.css';

const SideBar = ({ isOpen, onOpen, onClose, children }) => {
    return (
    <aside className="sidebar">
      {!isOpen && (
        <div className="sidebar-open">
            <button className='sidebar-open-button' onClick={onOpen}>
                  ☰
            </button>
        </div>
      )}

      <div className={`sidebar-panel ${isOpen ? 'open' : 'closed'}`}>
        <button className="sidebar-close-button" onClick={onClose}>
          x
        </button>
        <div className='sidebar-content'>
          {children}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;