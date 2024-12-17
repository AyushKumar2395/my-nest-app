'use client';
import React, { useEffect, useState } from 'react';

const CurrentTime = () => {

    const [datetime, setDatetime] = useState('');

    useEffect(() => {
        fetch('/api/currentDate', { method: "GET" })
            .then(res => res.json())
            .then((date) => {
                setDatetime(date.currentTime);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div>Current time : {datetime}</div>
    );
};

export default CurrentTime;