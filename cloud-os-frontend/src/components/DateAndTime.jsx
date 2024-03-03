import React, { useState, useEffect } from 'react';

const DateAndTime = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeOptions = {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            };
            const dateOptions = {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            };
            setCurrentTime(now.toLocaleString('en-US', timeOptions));
            setCurrentDate(now.toLocaleString('en-US', dateOptions));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center my-3">
            <h2 className="mb-3">{currentTime}</h2>
            <p className="lead">{currentDate}</p>
        </div>
    );
}

export default DateAndTime;
