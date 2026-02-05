import { TableAction } from "./TableAction";

function TableRow({ rowIndex, row = {}, columns = [], actions, isOpen, onToggle }) {
  return (
    <tr>
      {columns.map((col) => (
        <td key={col.key}>
          {row[col.key]}
        </td>
      ))}

      {actions && (
        <td>
          <TableAction 
            actions={actions} 
            rowData={row}  
            isOpen={isOpen}
            onToggle={() => onToggle(rowIndex)}
          />
        </td>
      )}
    </tr>
  );
}

export default TableRow;
