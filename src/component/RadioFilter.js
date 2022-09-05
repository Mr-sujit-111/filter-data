import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { applyGenderFilter } from '../features/filterSlice';
import { useDispatch } from 'react-redux';

function RadioFilter() {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('all');

    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(applyGenderFilter(e.target.value))
    };
    const RadioBtnStyle = {
        color: "#666666",
        '&.Mui-checked': {
            color: "#ed721b",
        },
    }
    return (
        <>
            <div>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="all" control={<Radio sx={RadioBtnStyle} />} label="All" />
                        <FormControlLabel value="male" control={<Radio sx={RadioBtnStyle} />} label="Male" />
                        <FormControlLabel value="female" control={<Radio sx={RadioBtnStyle} />} label="Female" />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
}

export default RadioFilter