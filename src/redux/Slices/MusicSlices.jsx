import { createSlice } from "@reduxjs/toolkit";
export const musicSlice = createSlice({
    name: "music",
    initialState:{
        onPlay: false,
        kindMusic: 'chill',
        volume: 0.5,
    },
    reducers:{
        changeMusic: (state, action)=>{
            state.onPlay = action.payload.onPlay
            state.kindMusic= action.payload.kindMusic
            state.volume= action.payload.volume
        }
    }
}) 
export const {changeMusic} = musicSlice.actions;
export default musicSlice.reducer;