import React, { useEffect, useState } from 'react'
import '../../css/asset.css'
import assignData from '../../Model/assignData';

export const Cards:React.FC<{head:String,check:boolean,handlesubmit:Function,id:Number,eodReport:String,
  reportstatus:String,reportDate:String,setEodReport:Function,setReportStatus:Function,
  setReportDate:Function,setId:Function}> = (prop) => {
  const [status, setStatus] = useState([1,2]);
  const [assignReport, setAssignReport]=useState("");
  let statdataArr:assignData[]=[{id:1,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:2,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:3,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:4,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:5,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:6,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:7,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:8,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"},
  {id:9,assignedData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias ab accusamus pariatur! Facilis, ex consectetur, ullam voluptatem aspernatur vitae sequi suscipit corrupti labore ipsa libero impedit nihil repudiandae quae"}]

  const [assignData, setAssignData] = useState<assignData[]>(statdataArr);
 
  const submitReport=()=>{
        if(prop.eodReport!==''&& prop.reportstatus!==''){
          prop.handlesubmit(prop.id,assignReport,prop.eodReport,prop.reportstatus,prop.reportDate);
          prop.setEodReport('');
          prop.setReportStatus('');
          prop.setReportDate('');
          prop.setId(0);
          console.log(assignReport);
      }
    }
  const cancelReport= () => {
    prop.setEodReport('');
    prop.setReportStatus('');
    prop.setReportDate('');
    prop.setId(0);
  }
const handleAssignData=(id:number)=>{
 let flitered= assignData.filter((data)=>{
  return  data.id===id;
 })
 setAssignData(flitered);
 setAssignReport(String(flitered[0].assignedData));

 }
  return (
    <div className="card shadow-lg mt-4" id="cards">
        <h3 className="card-header  text-light">
           {prop.head}
        </h3>
       
        <div className="card-body text-light">
        {prop.check && (
          <>
           <form>
            <div className="d-flex flex-column">
            <input type="text" className='d-none'value={Number(prop.id)}/>
            <input type="text" className='d-none' value={assignReport}/>
            <textarea id="eoddata" className="form-control" placeholder="Enter your eod report" onChange={e=>prop.setEodReport(e.target.value)} value={prop.eodReport.toString()}/>
            <select className="form-select mt-2" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={e=>prop.setReportStatus(e.target.value)} value={prop.reportstatus.toString()}>
              <option selected value={''}>Choose...</option>
              {status.map((data)=>{
                return(<option value={data}>
                  {data===1? "done": "inprogress"}
                  </option>)
              })}
            </select>
            <input type="date" value={prop.reportDate.toString()} className='form-control mt-2' onChange={(e)=>{prop.setReportDate(e.target.value)}}/>
           
              <button type='button' onClick={submitReport} className=' btn btn-warning btn-block  mt-2'>Submit</button>
            
              <button type='button' className='btn btn-danger btn-block mt-2' onClick={()=>{cancelReport()}}> cancel</button>
              
            </div>
            </form>
          </>
        )}
        {!prop.check && (
          <ul className='dine'>
          {assignData.map(data=>{
            return(
            
              <li className='mt-2' key ={data.id} onClick={()=>handleAssignData(data.id)}>
                {data.assignedData}
              </li>
           
            )})}
         </ul>
       )}
        </div>
    </div>
  )
}