import { useState } from 'react';
import axios from 'axios';
import './AdminForm.css';

const AdminForm = () => {
  const [batch, setBatch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [levelTerm, setLevelTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [buttonActive, setButtonActive] = useState(false);

  const batchOptions = ['18', '19', '20', '21', '22'];
  const levelTermOptions = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'];

  const handleSaveBatch = async () => {
    if (!batch || !levelTerm || !startDate) {
      setErrorMessage('Please select batch, level-term, and start date.');
      return;
    }

    try {
      const response= await axios.post('http://localhost:3001/batches', {
        batch: batch,
        levelTerm: levelTerm,
        startDate: startDate,
      });
      console.log(response)
      setBatch('');
      setStartDate('');
      setLevelTerm('');
      setErrorMessage('');
      setSuccessMessage(response.data.message);
      setButtonActive(true);

      setTimeout(() => {
        setSuccessMessage('');
        setButtonActive(false);
      }, 4000);
    } catch (error) {
      console.error('Error saving batch:', error);
      setErrorMessage('Error saving batch. Please try again.');
    }
  };

  return (
    <div>
      <form className='admin-form' id="admin-form">
        <div className="form-group">
          <label className='admin-label' htmlFor="batch">Select Batch:</label>
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
        <div className="form-group">
          <label className='admin-label' htmlFor="level-term">Select Level-Term:</label>
          <select
            id="level-term"
            value={levelTerm}
            onChange={(e) => setLevelTerm(e.target.value)}
            aria-label="Select Level-Term"
          >
            <option value="">Select Level-Term</option>
            {levelTermOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className='admin-label' htmlFor="starting-date">Class Starting Date:</label>
          <input
            type="date"
            id="starting-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </form>
      <div className="admin-containers">
        <button
          id="btn"
          onClick={handleSaveBatch}
          className={`${buttonActive ? 'active' : ''} admin-button`}
        >
          <p id="btnText">{buttonActive ? 'Thanks' : 'Submit'}</p>
          <div className="check-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
        </button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default AdminForm;
