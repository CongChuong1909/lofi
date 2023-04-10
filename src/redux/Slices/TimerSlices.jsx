import { createSlice } from "@reduxjs/toolkit";
export const TimerSlices = createSlice({
    name: "timer",
    initialState:{
        modeTimer: 'work',
        workMinute: 0,
        relaxMinute: 0,
    },
    reducers:{
        changeTimer: (state, action)=>{
            state.modeTimer = action.payload.modeTimer,
            state.workMinute = action.payload.workMinute,
            state.relaxMinute = action.payload.relaxMinute
        }
    }
}) 
export const {changeTimer} = TimerSlices.actions;
export default TimerSlices.reducer;