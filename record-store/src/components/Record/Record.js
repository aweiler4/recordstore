import { Button } from '@mui/material';
import React from 'react';
import './Record.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Record = (props) => {
    const history = useNavigate()
    const {_id, name, artist, description, price, image} = props.record;

    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:5000/records/${_id}`)
            .then(res => res.data)
            .then(() => history('/'))
            .then(() => history('/records'))
    }
    return (
        <div className='card'>
            <img src={image} alt={name} />
            <article>By {artist}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>$ {price}</h3>
            <Button LinkComponent={Link} to={`/records/${_id}`}sx={{ mt: 'auto' }}>Update</Button>
            <Button onClick={deleteHandler} sx={{ mt: 'auto' }}>Delete</Button>

        </div>
    )
}

export default Record;