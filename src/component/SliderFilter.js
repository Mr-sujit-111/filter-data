import { Slider } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { appyYearFilter } from '../features/filterSlice';

function SliderFilter() {
    const dispatch = useDispatch();

    // slider initial active range will be 1900-2100
    const [range, setRange] = React.useState([1900, 2100]);
    const minDistance = 10;

    const handleChange = (event, userValue, activeThumb) => {
        // get active range value
        if (!Array.isArray(userValue)) {
            return;
        }
        // make slider movable using 
        if (activeThumb === 0) {
            setRange([Math.min(userValue[0], range[1]), range[1]]);
        } else {
            setRange([range[0], Math.max(userValue[1], range[0])]);
        }
        dispatch(appyYearFilter(userValue))
    }
    return (
        <>
            <Slider sx={{ color: "#ed721b", marginTop: "25px" }}
                valueLabelDisplay="on"
                value={range}
                onChange={handleChange}
                disableSwap
                step={1}
                min={1860}
                max={2160}
            />
        </>
    )
}

export default SliderFilter