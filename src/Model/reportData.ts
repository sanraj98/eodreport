class reportData{
    id:number;
    assignedReport:String;
    report:String;
    status:String;
    reportDate:String;

    constructor(id:number,assignedReport:String,report: string,status: String,reportDate:string){
        this.id = id;
        this.assignedReport= assignedReport;
        this.report = report;
        this.status= status ;
        this.reportDate = reportDate;
    }

}

export default reportData;