function TableHeader({columns = [], hasActions}){
    return (
        <thead>
           <tr>
             {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
             ))}
             {hasActions && <th>Actions</th>}
           </tr>
        </thead>
    )
}

export default TableHeader;