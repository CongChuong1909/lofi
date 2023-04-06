import { createSlice } from "@reduxjs/toolkit";
export const modeSlice = createSlice({
    name: "mode",
    initialState:{
        dayNight: "day",
        scence: "outside",
        weather: "clear",
    },
    reducers:{
        changeMode: (state, action)=>{
            state.dayNight = action.payload.dayNight,
            state.scence = action.payload.scence,
            state.weather = action.payload.weather
        }
    }
}) 
export const {changeMode} = modeSlice.actions;
export default modeSlice.reducer;