import { createSlice } from "@reduxjs/toolkit";
export const HiddenSlice = createSlice({
    name: "hidden",
    initialState:{
        hidden: false,
        time: 999,
        isHidden: true
    },
    reducers:{
        changeHidden: (state, action)=>{
            state.hidden = action.payload.hidden,
            state.time = action.payload.time,
            state.isHidden = action.payload.isHidden
        }
    }
}) 
export const {changeHidden} = HiddenSlice.actions;
export default HiddenSlice.reducer;