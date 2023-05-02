import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.js';
import FormattedTime from '../FormattedTime/FormattedTime.js';

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    const Start = () => {
        setTimerOn(true);
    };

    const Stop = () => {
        setTimerOn(false);
    };

    const Reset = () => {
        setTimerOn(false);
        setTime(0);
    };

    return (
        <div>
            <FormattedTime time={time} />
            <Button onClick={Start}>Start</Button>
            <Button onClick={Stop}>Stop</Button>
            <Button onClick={Reset}>Reset</Button>
        </div>
    );


};

export default Stopwatch;