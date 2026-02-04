export function TableRow({rowData,columns, action}){
    return(
        <tr>
            {columns.map((col)=>(
                <td key={col.key}>{rowData[col.key]}</td>
            ))}

            <td> 
                <TableAction actions={action} rowData={rowData}></TableAction>
            </td>
        </tr>
    )
}