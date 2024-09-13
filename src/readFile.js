// import XLSX from 'xlsx';
// import fs from 'fs';

// const readRoutineDataFromExcelByBatch = () => {
//   const consolidatedData = {};
//   const batches = [18, 19, 20, 21, 22];

//   try {
//     batches.forEach(batch => {
//       const filePath = `./${batch}_routineData.xlsx`;

//       if (fs.existsSync(filePath)) {
//         const workbook = XLSX.readFile(filePath);
//         const sheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[sheetName];
//         const batchData = XLSX.utils.sheet_to_json(worksheet);

//         if (!consolidatedData[batch]) {
//           consolidatedData[batch] = {};
//         }

//         batchData.forEach(entry => {
//           const day = entry.day;
//           const timeRange = { start: entry.start, end: entry.end };
//           const className = entry.class;

//           if (typeof timeRange.start === 'number') {
//             timeRange.start = XLSX.SSF.format("hh:mm", timeRange.start);
//           }
//           if (typeof timeRange.end === 'number') {
//             timeRange.end = XLSX.SSF.format("hh:mm", timeRange.end);
//           }

//           if (!consolidatedData[batch][day]) {
//             consolidatedData[batch][day] = [];
//           }

//           consolidatedData[batch][day].push({ ...timeRange, class: className });
//         });
//       } else {
//         console.warn(`File for batch ${batch} not found.`);
//       }
//     });
//   } catch (error) {
//     console.error('Error reading files:', error);
//   }

//   return consolidatedData;
// };

// const routineDataFromExcel = readRoutineDataFromExcelByBatch();

// if (routineDataFromExcel) {
//   console.log('Routine data from Excel:', JSON.stringify(routineDataFromExcel, null, 2));
// }
