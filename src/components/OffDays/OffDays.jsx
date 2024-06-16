import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './OffDays.css';

const OffDays = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [offDays, setOffDays] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:3001/get-off-days',{
      batch: '18'
    })
      .then(response => {
        setOffDays(response.data.map(date => new Date(date)));
      })
      .catch(error => {
        console.error('There was an error fetching the off days!', error);
      });
  }, []);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleResetOffDays = async () => {
    try {
      await axios.delete('http://localhost:3001/reset-off-days',{
        batch : '18'
      });
      alert('Off days reset successfully!');
      setOffDays([]);
    } catch (error) {
      console.error('There was an error resetting the off days!', error);
    }
  };

  const handleSubmit = () => {
    if (!startDate || !endDate) {
      alert('Please select a valid date range.');
      return;
    }
    const startUTC = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
    const endUTC = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));

    axios.post('http://localhost:3001/save-off-days', {
      startDate: startUTC.toISOString().slice(0, 10),
      endDate: endUTC.toISOString().slice(0, 10),
      batch : '18'
    })
      .then(response => {
        console.log(response);
        alert('Off days saved successfully!');
        setOffDays([...offDays, ...getDateRange(startDate, endDate)]);
      })
      .catch(error => {
        console.error('There was an error saving the off days!', error);
      });
  };



  const getDateRange = (start, end) => {
    // console.log("start Date", start, 'endDate', end);
    const dateArray = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  };

  const isOffDay = (date) => {
    return offDays.some(offDay => offDay.toDateString() === date.toDateString());
  };

  const dayClassName = (date) => {
    return isOffDay(date) ? 'off-day' : undefined;
  };
 console.log(offDays)
  return (
    <div className='off-days-container'>
      <h2 className='off-day-h1'>Select Off Days</h2>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        excludeDates={offDays}
        dayClassName={dayClassName}
        className="custom-datepicker"
      />
      <div className='off-day-button-list'>
        <button className='off-day-button-save' onClick={handleSubmit}>Save Off Days</button>
        <button className='off-day-button-reset' onClick={handleResetOffDays}>Reset Off Days</button>
      </div>
    </div>
  );
};

export default OffDays;
