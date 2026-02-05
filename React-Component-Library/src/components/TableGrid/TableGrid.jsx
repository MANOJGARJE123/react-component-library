import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export function TableGrid({columns, rowData, actions}){
    return (
        <div className="table-wrapper">
            <table className="table-columns">
                <TableHeader columns={columns}></TableHeader>
                <tbody>
                    {rowData.map((row, index)=>(
                        <TableRow key={index} row={row} actions={actions}></TableRow>
                    ))}
                </tbody>
            </table>
        </div>  
    )
}