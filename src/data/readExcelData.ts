import * as XLSX from 'xlsx';

const readExcelFile = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      if (data) {
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetNames = workbook.SheetNames;
        
        //generate an array of object with sheet name and questions array
        const sheets = sheetNames.map((sheetName) => {
          const sheet = workbook.Sheets[sheetName];
          const questions = XLSX.utils.sheet_to_json(sheet);
          return { sheetName, questions };
        });
        
        resolve(sheets);
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsBinaryString(file);
  });
};

export default readExcelFile;
