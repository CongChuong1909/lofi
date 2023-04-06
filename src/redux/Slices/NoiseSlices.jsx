import { createSlice } from "@reduxjs/toolkit";
export const noiseSlices = createSlice({
    name: "noise",
    initialState:{
        cityTraffic:0,
        cityRain:0,
        keyBoard:0,
        peopleTalk:0,
    },
    reducers:{
        changeNoise: (state, action)=>{
            state.cityTraffic = action.payload.cityTraffic
            state.cityRain = action.payload.cityRain
            state.keyBoard = action.payload.keyBoard
            state.peopleTalk = action.payload.peopleTalk
        }
    }
}) 
export const {changeNoise} = noiseSlices.actions;
export default noiseSlices.reducer;