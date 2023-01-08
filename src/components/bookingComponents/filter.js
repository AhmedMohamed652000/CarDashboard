import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
function Filter() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='center justify-content-between w-100'>
            <div className=''>
                <Box sx={{ minWidth: 120 }} style={{display:'inline-block',margin:'0 10px 0 0'}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">New</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="New"
                            onChange={handleChange}
                            className='bookingSelect'
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </Box>
                <Box sx={{ minWidth: 120 }} style={{display:'inline-block',margin:'0 10px 0 0'}} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Toyota</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Toyota"
                            onChange={handleChange}
                            className='bookingSelect'
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div className=''>
                <TuneOutlinedIcon className='filterIcon' />
                <GridViewIcon className='filterIcon' />
            </div>
        </div>
    )
}

export default Filter