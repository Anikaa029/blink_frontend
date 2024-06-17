function isOffDay(date, offDays) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 5 || dayOfWeek === 6 || offDays.some(holiday => date.toDateString() === holiday.toDateString());
}

function getWeekNumber(startDate, currentDate, offDays) {
  let weekCount = 0;
  let currentWeekDays = 0;
  let date = new Date(startDate);

  while (date <= currentDate) {
    if (!isOffDay(date, offDays)) { 
      currentWeekDays += 1;
      if (currentWeekDays === 5) { 
        weekCount += 1;
        currentWeekDays = 0;
      }
    }
    date.setDate(date.getDate() + 1); 
  }

  if (currentWeekDays > 0) {
    weekCount += 1;
  }

  return weekCount;
}


const getOffDaysAccordingToBatch =(batch_no) =>{
  const temp = allOffDays.find(batch => batch.batch === batch_no);
  const data = temp? temp.dates.map(date => new Date(date)) : [];
  return data;
}

export {getWeekNumber, isOffDay, getOffDaysAccordingToBatch }