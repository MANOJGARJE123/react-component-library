import TableAction from "./TableAction"

export function TableRow({rowData,columns, actions}){
    return(
        <tr>
            {columns.map((col)=>(
                <td key={col.key}>{rowData[col.key]}</td>
            ))}

            {actions && <td> 
                <TableAction actions={actions} rowData={rowData}></TableAction>
            </td>}
        </tr>
    )
}