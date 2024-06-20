import React, { useState } from 'react'
import '../../css/home.css'
import reportData from '../../Model/reportData'
import {FaPen, FaTrash} from  "react-icons/fa";
import 'animate.css';

export const Table:React.FC<{reportdata:reportData[],deleteReport:Function,editReport:Function}> = (prop) => {
        const [rowToDelete, setRowToDelete] = useState<Number | null>(null);
        // Set the ID of the row to be deleted
        const handleDelete = (id: Number) => {
        setRowToDelete(id);

        // Call deleteReport function from props after a delay to allow the animation to play
        setTimeout(() => {
            prop.deleteReport(id);
            // Reset rowToDelete after deletion
            setRowToDelete(null);
        }, 1000); // Adjust the delay as needed based on the animation duration
    };
    const handleEdit=(id:Number)=>{
        prop.editReport(id);
    };
  return (
    <div className="container-fluid">
        <table className='mt-5 table table-striped table-hover table-info mytable'>
            <thead className='table-head'>
                <tr>
                    <th>s.no</th>
                    <th>Assigned Report</th>
                    <th>Report</th>
                    <th className='te'>status</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="myTable" className='c'>
                {prop.reportdata.map((item)=>{
                    return (
                        <tr
                        key={item.id}
                        className={`animate__animated ${
                            rowToDelete === item.id ? 'animate__fadeOut' : 'animate__fadeInDown'
                        }`}
                    >
                            <td>{item.id}</td>
                            <td>{item.assignedReport}</td>
                            <td>{item.report}</td>
                            <td className='te'>
                                <span className={item.status==="1"?"badge rounded-pill bg-success":"badge rounded-pill bg-warning text-dark"}>
                                {item.status==="1"?"done":"inprogress"}
                                </span>
                            </td>  
                            <td>{item.reportDate}</td>
                            <td className='text-primary'>{<FaPen role='button' onClick={()=>handleEdit(item.id)}/>}</td>
                            <td className='text-danger'>{<FaTrash role='button' onClick={()=>handleDelete(item.id)}/>}</td>
                        </tr>
                    )}
                )}
            </tbody>
        </table>
        </div>
  )
}