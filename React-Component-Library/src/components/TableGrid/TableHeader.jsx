export function TableHeader({columns}) {
    return(
        <tfoot>
            <tr>
                {columns.map((col)=>(
                    <th key={col.key}>{col.label}</th>
                ))}
            </tr>
        </tfoot>
    )
}