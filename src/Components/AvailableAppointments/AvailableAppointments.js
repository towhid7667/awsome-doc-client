import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableOptions from './AvailableOptions';

const AvailableAppointments = ({selectedDate}) => {
    const [availableOptions, setAvailableOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAvailableOptions(data))
    }, [])
    return (
        <section className='my-16'>
            <p className='text-secondary text-center font-bold'>Selected date: {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                availableOptions.map(availableOption => <AvailableOptions key={availableOption._id} availableOption ={availableOption}></AvailableOptions>)
            }
            </div>
        </section>
    );
};

export default AvailableAppointments;