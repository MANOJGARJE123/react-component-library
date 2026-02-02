const SideBar = ({isOpen, onClose, onOpen, children}) => {
    return (
        <div>
            <div className="sidebar-trigger">
            <button onClick={onOpen}>*</button>
            </div>

            <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                    <button className='sidebar-close-button' onClick={onClose}>x</button>
            </div>
        </div>
      
    )
}