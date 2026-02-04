import { useState } from "react";

export function TableAction({ actions, rowData }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>
        Actions
      </button>

      {open && (
        <div className="actions-menu">
          {actions.map((action, index) => (
            <div
              key={index}
              className="action-item"
              onClick={() => {
                action.onClick(rowData);
                setOpen(false);
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
