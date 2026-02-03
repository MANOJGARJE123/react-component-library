export function TableRow({rowData,columns, action}){
    return(
        <TableRow>
            {columns.map((col)=>(
                <td key={col.key}>{rowData[col.key]}</td>
            ))}
        </TableRow>
    )
}