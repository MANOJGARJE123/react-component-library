function TableAction({ actions = [], rowData = {}, isOpen = false, onToggle = () => {} }) {
  return (
    <div style={{ position: "relative" }}>
      <button onClick={onToggle}>
        Actions
      </button>

      {isOpen && (
        <div className="actions-menu">
          {actions.map((action, index) => (
            <div
              key={index}
              className="action-item"
              onClick={() => {
                action.onClick(rowData);
                onToggle();
              }} 
            >
              {action.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { TableAction };