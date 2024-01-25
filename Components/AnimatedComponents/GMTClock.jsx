import React, { useState, useEffect } from 'react';

const GMTClock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const gmtHours = now.getUTCHours();
            const gmtMinutes = now.getUTCMinutes();
            const formattedTime = `${gmtHours.toString().padStart(2, '0')}:${gmtMinutes.toString().padStart(2, '0')} ${gmtHours >= 12 ? 'pm' : 'am'}`;
            setTime(formattedTime);
        };

        // Update clock initially and then every minute
        updateClock();
        const intervalId = setInterval(updateClock, 60000); // Update every minute

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <div>
            <div>
                <p className='opacity-50 lg:text-lg text-sm mb-2'>Local Time</p>
                <p className='text-[3rem] lg:text-[4rem] leading-[1] font-thin'>{time}</p>
            </div>
        </div> 
    )

};

export default GMTClock