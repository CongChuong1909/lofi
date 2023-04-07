import { createSlice } from "@reduxjs/toolkit";
export const noiseSlices = createSlice({
    name: "noise",
    initialState:{
        cityTraffic:0,
        cityRain:0,
        keyBoard:0,
        peopleTalk:0,
        fire:0,
        wave:0,
        wind:0,
    },
    reducers:{
        changeNoise: (state, action)=>{
            state.cityTraffic = action.payload.cityTraffic
            state.cityRain = action.payload.cityRain
            state.keyBoard = action.payload.keyBoard
            state.peopleTalk = action.payload.peopleTalk
            state.fire = action.payload.fire
            state.wave = action.payload.wave
            state.wind = action.payload.wind
        }
    }
}) 
export const {changeNoise} = noiseSlices.actions;
export default noiseSlices.reducer;