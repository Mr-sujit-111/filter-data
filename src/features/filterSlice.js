import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        genderFilter: "all",
        country: "all",
        interestLanguages: [],
        rangeYearOfBirth: [1900, 2100]
    },
    reducers: {
        applyGenderFilter(state, action) {
            state.genderFilter = action.payload;
        },
        appyCountryFilter(state, action) {
            state.country = action.payload;
        },
        appyInterestFilter(state, action) {
            state.interestLanguages = action.payload;
        },
        appyYearFilter(state, action) {
            state.rangeYearOfBirth = action.payload;
        }
    },
});

export const { applyGenderFilter, appyCountryFilter, appyInterestFilter, appyYearFilter } = filterSlice.actions;
export default filterSlice.reducer;