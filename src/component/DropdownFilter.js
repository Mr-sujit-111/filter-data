import { Autocomplete, TextField } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { country_list } from '../assets/countryList'
import { appyCountryFilter } from '../features/filterSlice';

function DropdownFilter() {
    const dispatch = useDispatch();
    const getSelectedCountry = (e, value) => {
        // set country filter value at store 
        dispatch(appyCountryFilter(value));
    }
    return (
        <>
            <Autocomplete
                style={{ width: '100%' }}
                disablePortal
                id="combo-box-demo"
                options={country_list}
                onChange={getSelectedCountry}
                sx={{ width: 300, color: "red" }}
                renderInput={(params) => <TextField {...params} label="All Country" />}
            />
        </>
    )
}

export default DropdownFilter