export function TableRow({rowData,columns, action}){
    return(
        <tr>
            {columns.map((col)=>(
                <td key={col.key}>{rowData[col.key]}</td>
            ))}
        </tr>
    )
}