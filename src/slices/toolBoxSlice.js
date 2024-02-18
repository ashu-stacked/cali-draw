const { createSlice } = require("@reduxjs/toolkit");
import { COLORS, MENU_ITEMS } from "@/constants";

const toolBoxSlice = createSlice({
    name:'toolBox',
    initialState:{
        [MENU_ITEMS.PENCIL]:{
            color:COLORS[0],
            size:3
        },
        [MENU_ITEMS.ERASER]:{
            color:COLORS[COLORS.length-1],
            size:3
        },
        [MENU_ITEMS.UNDO]:{},
        [MENU_ITEMS.REDO]:{},
        [MENU_ITEMS.DOWNLOAD]:{},
    },
    reducers:{
        colorChosenForVisualMenuItem:(state,action)=>{
            state[action.payload.item].color = action.payload.color;
        },
        brushSizeChosenForVisualMenuItem:(state,action)=>{
            state[action.payload.item].size = action.payload.size;
        }
    }
})

export default toolBoxSlice.reducer;
export const {colorChosenForVisualMenuItem,brushSizeChosenForVisualMenuItem} = toolBoxSlice.actions;