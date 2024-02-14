const { MENU_ITEMS } = require("@/constants");
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
activeVisualChangesMenuItem: MENU_ITEMS.PENCIL,// activeVisualChangesMenuItem means pencil,eraser
activeActionChangesMenuItem:null //activeActionChangesMenuItem means undo,redo,download
}

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
     visualMenuItemClick: (state,action)=>{
        state.activeVisualChangesMenuItem = action.payload;
     },
     actionMenuItemClick: (state,action)=>{
        state.activeActionChangesMenuItem = action.payload;
     }
    }
})

export default menuSlice.reducer;
export const {visualMenuItemClick} = menuSlice.actions;