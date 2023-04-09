import { createSlice } from "@reduxjs/toolkit";
export const scenesSlices = createSlice({
    name: "scenes",
    initialState:{
        scenes:'CafeBook',
        positionScenes: 'inside',
    },
    reducers:{
        changeScenes: (state, action)=>{
            state.scenes = action.payload.scenes
            state.positionScenes= action.payload.positionScenes
        }
    }
}) 
export const {changeScenes} = scenesSlices.actions;
export default scenesSlices.reducer;