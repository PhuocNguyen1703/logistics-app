import dayjs from 'dayjs';

import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        monthIndex: dayjs().month(),
        daySelected: dayjs().format('MMM DD, YYYY'),
        smallCalendarSelectedDay: dayjs().format('MMM DD, YYYY'),
    },
    reducers: {
        setMonthIndex: (state, action) => {
            state.monthIndex = action.payload;
        },
        setDaySelected: (state, action) => {
            state.daySelected = action.payload;
        },
        setSmallCalendarSelectedDay: (state, action) => {
            state.smallCalendarSelectedDay = action.payload;
        },
    },
});

export const { setMonthIndex, setDaySelected, setSmallCalendarSelectedDay } = calendarSlice.actions;

export default calendarSlice.reducer;
