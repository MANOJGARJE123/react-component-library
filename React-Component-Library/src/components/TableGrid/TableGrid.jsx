import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./TableGrid.css";

export function TableGrid({columns = [], rowData = [], actions}){
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <div className="table-wrapper">
            <table className="table-columns">
                <TableHeader columns={columns}></TableHeader>
                <tbody>
                    {rowData.map((row, index)=>(
                          <TableRow key={index} 
                            rowIndex={index}
                            row={row} 
                            columns={columns} 
                            actions={actions}
                            isOpen={openDropdown === index}
                            onToggle={(index) => setOpenDropdown(openDropdown === index ? null : index)}
                        ></TableRow>
                    ))}
                </tbody>
            </table>
        </div>  
    )
}