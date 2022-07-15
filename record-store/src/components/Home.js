import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Button LinkComponent={Link} to='/records' sx={{ marginTop: 30, backgroundColor: 'black' }} variant='contained'>
                    <Typography variant='h3'>View All Records</Typography>
                </Button>
            </Box>
        </div>
    )
}

export default Home;