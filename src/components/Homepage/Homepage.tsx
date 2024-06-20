import React, { useState } from 'react'
import { Cards } from './Cards'
import '../../css/home.css'
import { Table } from './Table'
import reportData from '../../Model/reportData'
import { Header } from '../Header'
export const Homepage:React.FC = () => {
  const[reportdata,setReportData] = useState<reportData[]>([]);
  const[id,setId]=useState(0);
  const [eodReport, setEodReport] = useState('');
  const [reportstatus, setReportStatus] = useState('');
  const [reportDate, setReportDate] = useState('');

  const handletablesubmit=(id:number,assignedReport:String,report:String,status:String,reportDate:String) =>{
   
    if (reportdata.length === 0 || id === 0) {
      id = reportdata.length > 0 ? reportdata[reportdata.length - 1].id + 1 : 1;
    
      const newReport: reportData = {
        id: id,
        assignedReport: assignedReport,
        report: report,
        status: status,
        reportDate:reportDate
      };
      setReportData([...reportdata, newReport])
    } else {
     
      setReportData(reportdata => reportdata.map(item => item.id === id ? { ...item, report: report, status: status, reportDate: reportDate} : item));
      console.log(reportdata);

    }
      
  }

  const editReport=(editId:Number)=>{
    let filtered = reportdata.filter((value)=> {
      return value.id === editId;
    });
    setId(filtered[0].id);
    setEodReport(String(filtered[0].report));
    setReportStatus(String(filtered[0].status));
    setReportDate(String(filtered[0].reportDate));
  }

  const deleteReport = (deleteReportId: number) => {
    let filtered = reportdata.filter((value)=> {
      return value.id !== deleteReportId;
    });
    setReportData(filtered);
  }
  return (
    <>
    <Header/>
    <div className="container mt-4 px-4">
       <div className="row">
        <div className="col-lg col-md-6">
            <Cards head={"Bod"} check={false} handlesubmit={handletablesubmit} id={id} eodReport={eodReport} reportstatus={reportstatus} reportDate={reportDate} setEodReport={setEodReport} setReportStatus={setReportStatus} setReportDate={setReportDate} setId={setId} />
        </div>
        <div className="co-lg col-md-6">
            <Cards head={"Eod"} check={true} handlesubmit={handletablesubmit} id={id} eodReport={eodReport} reportstatus={reportstatus} reportDate={reportDate} setEodReport={setEodReport} setReportStatus={setReportStatus} setReportDate={setReportDate} setId={setId}/>
        </div>
       
       </div>
    </div>
    <Table reportdata={reportdata} deleteReport={deleteReport} editReport={editReport}/>
    </>
  )
}
