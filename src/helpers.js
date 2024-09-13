import XLSX from 'xlsx'; 
import routineData from './RoutineData.js'; 

const writeRoutineDataToExcelByBatch = (data) => {
  try {
    for (const [batch, days] of Object.entries(data)) {
      const formattedData = Object.entries(days).flatMap(([day, schedules]) =>
        schedules.map(schedule => ({ batch, day, ...schedule }))
      );

      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Routine Data');

      const filePath = `./${batch}_routineData.xlsx`;
      XLSX.writeFile(workbook, filePath);
      console.log(`Data written to ${filePath} successfully.`);
    }
  } catch (error) {
    console.error('Error writing files:', error);
  }
};

writeRoutineDataToExcelByBatch(routineData);
