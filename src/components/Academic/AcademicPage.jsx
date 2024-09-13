import { useState, useEffect } from 'react';
import axios from 'axios';
import './AcademicPage.css';
import { getWeekNumber } from '../../utils';

export default function AcademicPage() {
  const [batches, setBatches] = useState([]);
  const [routineData, setRoutineData] = useState({});
  const [offDays, setOffDays] = useState([]);
  const [allOffDays, setAllOffDays] = useState([]);

  useEffect(() => {
    fetchBatches();
    fetchRoutineData();
    fetchOffDays();
    fetchAllOffDays();
    const interval = setInterval(fetchRoutineData, 1000);

    return () => clearInterval(interval); 
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await axios.get('http://localhost:3001/batches');
      setBatches(response.data);
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  const fetchOffDays = async () => {
    try {
      const response = await axios.get('http://localhost:3001/get-off-days',{
        batch: '18'
      });
      setOffDays(response.data.map(date => new Date(date)));
    } catch (error) {
      console.error('There was an error fetching the off days!', error);
    }
  };
  const fetchAllOffDays = async () => {
    try {
        const response = await axios.get('http://localhost:3001/get-all-off-days');
        setAllOffDays(response.data);
    } catch (error) {
        console.error('There was an error fetching the off days!', error);
        setError('Error fetching the off days');
    }
};


  const fetchRoutineData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/routine-data');
      setRoutineData(response.data);
    } catch (error) {
      console.error('Error fetching routine data:', error);
    }
  };


  
  const getCurrentClass = (batch, currentTime) => {
    const dayOfWeek = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
    const time = currentTime.getHours() * 60 + currentTime.getMinutes();
  
    if (routineData && routineData[batch]) {
      const routines = routineData[batch].filter(routine => routine.day === dayOfWeek);
  
      const currentRoutine = routines.find(routine => {
        if (typeof routine.start !== 'string' || typeof routine.end !== 'string') {
          console.error('Routine time format error', routine);
          return false;
        }
        const [startHour, startMinute] = routine.start.split(':').map(Number);
        const [endHour, endMinute] = routine.end.split(':').map(Number);
        const routineStart = startHour * 60 + startMinute;
        const routineEnd = endHour * 60 + endMinute;
  
        return time >= routineStart && time < routineEnd;
      });
  
      return currentRoutine ? currentRoutine.class : 'No class';
    } else {
      return 'No class';
    }
  };
  

  const getOffDaysAccordingToBatch =(batch_no) =>{
    const temp = allOffDays.find(batch => batch.batch === batch_no);
    const data = temp? temp.dates.map(date => new Date(date)) : [];
    return data;
  }
  



  console.log("Batches", batches)
  
  const currentDateTime = new Date();

  return (
    <div className="academic-container">
      <h1 className="academic-header">Academic Routine</h1>
      <div className="schedule-container">
        {batches.map((batch) => (
          <div key={batch.id} className="schedule-column gradient-border">
          <div className="box">
              <h3 className='live-class'>Batch</h3>
              <p>{batch.batch}</p>
            </div>
            <div className="box">
              <h3 className='live-class'>Starting Date</h3>
              <p>{batch.start_date}</p>
            </div>
            <div className="box">
              <h3 className='live-class'>Level-Term</h3>
              <p>{batch.level_term}</p>
            </div>            
            <div className="box">
              <h3 className='live-class'>Current Week</h3>
              <p className="current-week">{getWeekNumber(batch.start_date,currentDateTime, getOffDaysAccordingToBatch(batch.batch))}</p>
            </div>
            <div className="box" style={{ backgroundColor: '#fdecea' }}>
              <h3 className='live-class'>Live Class</h3>
              <p className="live-class-content">{getCurrentClass(batch.batch, currentDateTime)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
