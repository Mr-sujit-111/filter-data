import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { appyInterestFilter } from '../features/filterSlice';

function CheckBoxFilter() {
    const [selectedvalue, setSelectedvalue] = useState(["all"]);
    const dispatch = useDispatch();
    const checkBoxStyle = {
        color: "#666666",
        '&.Mui-checked': {
            color: "#ed721b",
        }
    }
    const Interests = ["HTML", "CSS", "Javascript", "ReactJs", "PHP", "Laravel"];

    const checkedOrNot = (e) => {
        if (e.target.checked) {
            // if check interest add in selectedValue
            setSelectedvalue(oldValue => [...oldValue, (e.target.value).toLowerCase()]);
            // dispatch()
        } else {
            // if uncheck interest remove from selectedValue
            setSelectedvalue(selectedvalue.filter(item => item !== (e.target.value).toLowerCase()));
        }
    }
    dispatch(appyInterestFilter(selectedvalue));


    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked onClick={checkedOrNot} sx={checkBoxStyle} value="all" />} label="All" />
                {Interests.map((value, index) => {
                    return <FormControlLabel className="checkBox__item" key={index} control={<Checkbox onClick={checkedOrNot} sx={checkBoxStyle} value={value} />} label={value} />
                })}
            </FormGroup>
        </>
    )
}

export default CheckBoxFilter