import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Record from './Record';
import './Record.css';

const URL = 'http://localhost:5000/records';

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const Records = () => {
    const [records, setRecords] = useState();
    useEffect(() => {
        fetchHandler().then(data => setRecords(data.records))
    }, []);
    console.log(records)
    return (
        <div>
            <ul>
                {records && records.map((record, i) => (
                    <li className='record' key={i}>
                        <Record record={record}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Records;