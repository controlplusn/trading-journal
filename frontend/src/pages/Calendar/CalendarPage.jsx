import React, { useState, useEffect } from 'react';
import { fetchTradeDetails } from '../../api/tradeCollection.api';
import '../../styles/Calendar/calendar.css';

const CalendarPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tradeDetails, setTradeDetails] = useState([]);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const getData = async (date = new Date()) => {
        if (!date) return;

        const allTrades = await fetchTradeDetails(date);
        const selectedDateString = date.toLocaleDateString('en-CA')

        const filteredTrades = allTrades.filter((trade) => {
            const tradeDate = new Date(trade.dateTime).toLocaleDateString('en-CA'); // YYYY-MM-DD
            return tradeDate === selectedDateString;
        });
        setTradeDetails(filteredTrades || []);
    }

    useEffect(() => {
        getData(currentDate);
    }, [currentDate]);


    // open modal
    const handleDayClick = (day) => {
        const date = new Date(year, month, day)
        setSelectedDate(date);
        setIsModalOpen(true);
        getData(date);
    }

    // close modal
    const closeModal = () => {
      setIsModalOpen(false);
    }

    // generate days
    const generateCalendar = () => {
      const days = [];
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="empty"></div>);
      }
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(
            <div 
                key={day} 
                className="day" 
                onClick={() => handleDayClick(day)}
            >
                {day}
            </div>
        );
      }
      return days;
    };

    // current date
    const currentDay = () => {
      setCurrentDate(new Date());
    }

    // months
    const prevMonth = () => {
      setCurrentDate(new Date(year, month - 1, 1));
    }

    const nextMonth = () => {
      setCurrentDate(new Date(year, month + 1, 1))
    }

    return (
        <div className='calendar-page'>
            <h1>Trade Calendar</h1>
            <div className="calendar">
                <div className="header">
                    <button onClick={prevMonth} className='prev-month'>◀</button>
                    <h2>{currentDate.toLocaleString("default", { month: "long" })} {year}</h2>
                    <button onClick={currentDay} className='current-day'>Today</button>
                    <button onClick={nextMonth} className='next-month'>▶</button>
                </div>

                <div className="days-of-week">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="day-name">{day}</div>
                    ))}
                </div>
              
                <div className="grid">{generateCalendar()}</div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <div className="trade-details-container">
                                <h3>Trade Details:</h3>
                                <p>{selectedDate.toDateString()}</p>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Asset</th>
                                            <th>Order Type</th>
                                            <th>Trade Type</th>
                                            <th>Leverage</th>
                                            <th>Entry</th>
                                            <th>SL</th>
                                            <th>TP</th>
                                            <th>Exit</th>
                                            <th>Size</th>
                                            <th>Date</th>
                                            <th>Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tradeDetails.map((data, index) => (
                                            <tr key={index}>
                                                <td>{data.asset}</td>
                                                <td>{data.orderType}</td>
                                                <td>{data.tradeType}</td>
                                                <td>{data.leverage}</td>
                                                <td>{data.entryPrice}</td>
                                                <td>{data.slPrice}</td>
                                                <td>{data.tpPrice}</td>
                                                <td>{data.exitPrice}</td>
                                                <td>{data.tradeSize}</td>
                                                <td>{new Date(data.dateTime).toLocaleString()}</td>
                                                <td>{data.tradeOutcome}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <button className="close-day-btn" onClick={closeModal}>Close</button>

                        </div>
                    </div>
                )}
          </div>
      </div>
    )
}

export default CalendarPage