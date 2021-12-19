import { Button } from '@mui/material';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportToExcel = ({ apiData, fileName }) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (dataApi, nameFile) => {
        const ws = XLSX.utils.json_to_sheet(dataApi);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, nameFile + fileExtension);
    };

    return (
        <Button variant="contained" onClick={() => exportToCSV(apiData, fileName)}>Export</Button>
    );
};

export default ExportToExcel