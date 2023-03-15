import { useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import { useState } from 'react';

import { dummyData } from '../assets/dummyData';

function Body() {
    const { genderFilter, country, interestLanguages, rangeYearOfBirth } = useSelector((state) => state.filter);
    const [appliedfilter, setAppliedfilter] = useState({ genderFilterData: genderFilter, countryFilterData: country, interestLanguageData: interestLanguages, yearOfBirthData: rangeYearOfBirth });
    const [filteredData, setFilteredData] = useState(dummyData);
    const [tempState, setTempState] = useState(dummyData)

    //for the setState data of filter selected
    useEffect(() => {
        setAppliedfilter({ genderFilterData: genderFilter, countryFilterData: country, interestLanguageData: interestLanguages, yearOfBirthData: rangeYearOfBirth });
    }, [genderFilter, filteredData, country, interestLanguages, rangeYearOfBirth])

    //for the genderFilter
    useEffect(() => {
        const res = dummyData.filter((value) => (appliedfilter.genderFilterData === value.gender || appliedfilter.genderFilterData === "all"));
        setFilteredData(res);
        setTempState(res);
    }, [appliedfilter.genderFilterData])

    //for the countryFilter
    useEffect(() => {
        const res = tempState.filter(((value) => appliedfilter.countryFilterData === value.country || appliedfilter.countryFilterData === "all" || appliedfilter.countryFilterData === null)
        )
        setFilteredData(res);
        setTempState(res);
        // setFilteredData(filteredData.filter(((value) => appliedfilter.countryFilterData === value.country || appliedfilter.countryFilterData === "all" || appliedfilter.countryFilterData === null)
        // ))
    }, [appliedfilter.countryFilterData])

    // for the interestFilter
    useEffect(() => {
        let finalList = [];
        appliedfilter.interestLanguageData.map((value) => {
            tempState.filter((item) => {
                if (interestLanguages.includes("all")) {
                    finalList = item
                } else {
                    if (item.skills.includes(value)) {
                        finalList = item;
                    }
                }
            });
        })
        console.log(finalList);
        /* appliedfilter.interestLanguageData.map((value) => {
            dummyData.filter((item) => {
                if (interestLanguages.includes("all")) {
                    finalList.push(item)
                } else {
                    if (item.skills.includes(value)) {
                        finalList.push(item);
                    }
                }
            });
        }) */
        setFilteredData(finalList);
    }, [appliedfilter.interestLanguageData])

    //for the yearOfBirthFilter
    useEffect(() => {
        let [start, end] = appliedfilter.yearOfBirthData;
        setFilteredData(dummyData.filter((item) => {
            let yearOfBirth = item.DOB.slice(-4);
            if (yearOfBirth >= start && yearOfBirth <= end) {
                return true
            }
        }))
    }, [appliedfilter.yearOfBirthData])



    return (
        <>
            <div className="row">
                {filteredData.length > 0 ? filteredData.map((item, index) => {
                    const { name, DOB, image, skills, country } = item;
                    const myskills = skills.join(" , ").toString();
                    return <div key={index} className="col-lg-4 col-md-6 col-sm-6 my-3 my__custom__card__container">
                        <div className="card my__custom__card">
                            <img height={200} width={200} className="card-img-top" src={image} alt="Card cap" />
                            <div className="card-body">
                                <div className="detail d-flex justify-content-between">
                                    <p>{name}</p>
                                    <span>{DOB}</span>
                                </div>

                                <p>skills : {myskills}</p>
                                <p>country : {country}</p>
                            </div>
                        </div>
                    </div>
                }) : <>
                    <div className="no__Data">No Data Found..</div>
                </>}
            </div>
        </>
    )
}

export default Body