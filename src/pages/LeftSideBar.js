import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import { IconButton } from '@mui/material';
import "../css/leftSideBar.css"
import RadioFilter from '../component/RadioFilter';
import DropdownFilter from '../component/DropdownFilter';
import CheckBoxFilter from '../component/CheckBoxFilter';
import SliderFilter from '../component/SliderFilter';
function LeftSideBar() {
    return (
        <>
            <div className="left__sidebar__options">
                <div className="filter__container">
                    <div className="filter__heading">
                        <div className="filter-icon">
                            <IconButton>
                                <TuneIcon style={{ color: '#ed721b' }} />
                            </IconButton>
                        </div>
                        <span className="filter__title">Filter</span>
                    </div>
                    <div className="genderFilter my-2 mx-2">
                        <span className="filter__name">Select Gender</span>
                        <RadioFilter />
                    </div>
                    <div className="dropdownFilter mt-3 mx-2">
                        <span className="filter__name">Select Country</span>
                        <div className="my-2">
                            <DropdownFilter />
                        </div>
                    </div>
                    <div className="checkboxFilter mt-3 mx-2">
                        <span className="filter__name">Select Your Interest</span>
                        <div className="my-2">
                            <CheckBoxFilter />
                        </div>
                    </div>
                    <div className="SliderFilter mt-3 mx-2">
                        <span className="filter__name">Year Of Birth</span>
                        <div className="my-2">
                            <SliderFilter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSideBar