const SideBar = () => {

    const[isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='sidebar'>
            <div className="sidebar-trigger">
                <button className='sidebar-open-button' onClick={() => setIsOpen(true)}>*</button>
            </div>

            <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <button className='sidebar-close-button' onClick={() => setIsOpen(false)}>x</button>
            </div>
        </div>
      
    )
}