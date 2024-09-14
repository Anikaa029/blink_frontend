import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './OffDays.css';

const OffDays = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [offDays, setOffDays] = useState([]);
  const [batch, setBatch] = useState('18');

  const batchOptions = ['18', '19', '20', '21', '22', 'all'];

  useEffect(() => {
    axios.post('http://localhost:3001/get-off-days',{
      batch: batch
    })
      .then(response => {
        setOffDays(response.data.map(date => new Date(date)));
      })
      .catch(error => {
        console.error('There was an error fetching the off days!', error);
      });
  }, [batch]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleResetOffDays = async () => {
    try {
      console.log("handle reset off days", batch);
      await axios.delete('http://localhost:3001/reset-off-days', {
        data: { batch: batch }
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

    if (!batch) {
      setErrorMessage('Please select batch.');
      return;
    }

    const startUTC = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
    const endUTC = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));

    axios.post('http://localhost:3001/save-off-days', {
      startDate: startUTC.toISOString().slice(0, 10),
      endDate: endUTC.toISOString().slice(0, 10),
      batch : batch
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
      <div className="off-days-input">
        <label className='label' htmlFor="batch">Select Batch:</label>
        <select
          id="batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        >
          <option value="">Select Batch</option>
          {batchOptions.map((option) => (
            <option key={option} value={option}>
              Batch {option}
            </option>
          ))}
        </select>
      </div>
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
