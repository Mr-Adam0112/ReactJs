import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


Clock.propTypes = {
    
};

function Clock() {
    const [timeString, setTimeString] = useState('');
    // const {timeString} = useClock();

    useEffect(() => {
        const clockInterval = setInterval(()=>{
            const now = new Date();
            const newTimeString = Date(now);

            setTimeString(newTimeString);
        }, 1000);
        return () => {
            console.log('clock');
            clearInterval(clockInterval);
        };
    }, []);
    return (
        <div>
            <p style={{fontSize: '20px'}}> {timeString}</p>  
        </div>
    );
}

export default Clock;