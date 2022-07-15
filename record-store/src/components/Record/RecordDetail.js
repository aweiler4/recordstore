import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import { FormLabel, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const RecordDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/records/${id}`)
                .then(res => res.data).then(data => setInputs(data.record))
        }
        fetchHandler()
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/records/${id}`, {
            name: String(inputs.name),
            artist: String(inputs.artist),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res => res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/records'))
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }));
    };
 
    return (
        <div>
                   {inputs && <form onSubmit={handleSubmit}>
            <Box       
                display='flex' 
                flexDirection='column' 
                justifyContent={'center'} 
                maxWidth={700}
                alignContent={'center'}
                alignSelf='center'
                marginLeft={'auto'}
                marginRight='auto'
                marginTop={10}
            >
            <FormLabel>Name</FormLabel>
            <TextField 
                value={inputs.name} 
                onChange={handleChange} 
                margin='normal' 
                fullWidth 
                variant='outlined' 
                name='name'/>
            <FormLabel>Artist</FormLabel>
            <TextField 
                value={inputs.artist} 
                onChange={handleChange} 
                margin='normal' 
                fullWidth 
                variant='outlined' 
                name='artist'/>
            <FormLabel>Description</FormLabel>
            <TextField 
                value={inputs.description} 
                onChange={handleChange} 
                margin='normal' 
                fullWidth 
                variant='outlined' 
                name='description'/>
            <FormLabel>Price</FormLabel>
            <TextField 
                value={inputs.price} 
                onChange={handleChange} 
                type='number' 
                margin='normal' 
                fullWidth 
                variant='outlined' 
                name='price'/>
            <FormLabel>Image</FormLabel>
            <TextField 
                value={inputs.image} 
                onChange={handleChange} 
                margin='normal' 
                fullWidth 
                variant='outlined' 
                name='image'/>
            <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)}/>} label="Available"/>
            <Button variant='contained' type='submit'>Update Record</Button>
            </Box>
        </form>
}
        </div>
    )
}

export default RecordDetail;