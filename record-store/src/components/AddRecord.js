import { FormLabel, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddRecord = () => {
    const history = useNavigate()
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        price: '',
        artist: '',
        image: ''
    })
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        })).then(res => res.data);
    }

    const sendRequest = async() => {
        await axios.post('http://localhost:5000/records', {
            name:String(inputs.name),
            artist: String(inputs.artist),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/records'))
    }
    return (
        <form onSubmit={handleSubmit}>
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
            <Button variant='contained' type='submit'>Add Record</Button>
            </Box>
        </form>
    )
}

export default AddRecord;