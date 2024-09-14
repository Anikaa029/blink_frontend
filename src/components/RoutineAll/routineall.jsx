import { useEffect, useState } from 'react';
import axios from 'axios';
import './routineall.css';

const timeSlots = [
    "8:10 to 9:00",
    "9:00 to 9:50",
    "9:50 to 10:40",
    "10:40 to 11:00", // Break
    "11:00 to 11:50",
    "11:50 to 12:40",
    "12:40 to 1:30",
    "1:30 to 2:30",   // Lunch
    "2:30 to 3:20",
    "3:20 to 4:10",
    "4:10 to 5:00"
];

const batches = ["18", "19", "20", "21", "22"];

const MasterRoutine = () => {
    const [routine, setRoutine] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoutine = async () => {
            try {
                const response = await axios.get('http://localhost:3001/routine');
                setRoutine(response.data);
                console.log('Routine data:', response.data);  // Log routine data for debugging
                setLoading(false);
            } catch (error) {
                console.error('Error fetching routine', error);
                setError('Error fetching routine');
                setLoading(false);
            }
        };

        fetchRoutine();
    }, []);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value.toLowerCase());
    };

    const padTime = (time) => {
        const [hours, minutes] = time.split(':');
        return `${hours.padStart(2, '0')}:${minutes}`;
    };

    const getClassForSlot = (batch, slot) => {
        const [startTime, endTime] = slot.split(' to ').map(time => padTime(time.trim()));

        console.log(`Looking for class for batch ${batch} between ${startTime} and ${endTime}`);  // Debugging log

        if (startTime === '10:40' && endTime === '11:00') {
            return 'BREAK';
        }
        if (startTime === '1:30' && endTime === '2:30') {
            return 'LUNCH';
        }

        const classEntry = routine[selectedDay]?.find(entry =>
            entry.batch === batch &&
            entry.startTime === startTime &&
            entry.endTime === endTime
        );

        console.log('Class entry found:', classEntry);  // Debugging log
        return classEntry ? classEntry.class : '';
    };

    const renderVerticalText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className="vertical-text">{char}</span>
        ));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="Appss">
            <h1>Academic Routine</h1>
            <label>
                Select Day:
                <select onChange={handleDayChange}>
                    <option value="">--Select Day--</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                </select>
            </label>
            {selectedDay && (
                <table>
                    <thead>
                        <tr>
                            <th>Batch</th>
                            {timeSlots.map((slot, index) => (
                                <th key={index}>{slot}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {batches.map((batch, index) => (
                            <tr key={index}>
                                <td>{batch}</td>
                                {timeSlots.map((slot, slotIndex) => (
                                    (slot === "10:40 to 11:00" || slot === "1:30 to 2:30") && index !== 0 ? null : (
                                        <td key={slotIndex} rowSpan={(slot === "10:40 to 11:00" || slot === "1:30 to 2:30") ? batches.length : 1}>
                                            {slot === "10:40 to 11:00" ? renderVerticalText('BREAK') : 
                                             slot === "1:30 to 2:30" ? renderVerticalText('LUNCH') : 
                                             getClassForSlot(batch, slot)}
                                        </td>
                                    )
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {!selectedDay && <div> Please select a day to view the routine. </div>}
        </div>
    );
};

export default MasterRoutine;
