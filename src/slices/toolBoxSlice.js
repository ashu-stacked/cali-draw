const { createSlice } = require("@reduxjs/toolkit");
import { COLORS } from "@/constants";

const toolBoxSlice = createSlice({
    name:'toolBox',
    initialState:{
        color:COLORS[0],
        brushSize:3
    },
    reducers:{
        colorChosen:(state,action)=>{
            state.color = action.payload;
        },
        brushSizeChosen:(state,action)=>{
            state.brushSize = action.payload;
        }
    }
})

export default toolBoxSlice.reducer;
export const {colorChosen,brushSizeChosen} = toolBoxSlice.actions;