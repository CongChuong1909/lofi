import { createSlice } from "@reduxjs/toolkit";
export const positionDragSlices = createSlice({
    name: "dragPosition",
    initialState:{
        isDragging: false,
        draggingPosition: { x: 500, y: 500 },
    },
    reducers:{
        changePosition: (state, action)=>{
            state.isDragging = action.payload.isDragging
            state.draggingPosition = action.payload.draggingPosition
        }
    }
}) 
export const {changePosition} = positionDragSlices.actions;
export default positionDragSlices.reducer;