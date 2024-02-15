import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from './slices/menuSlice'
import ToolBoxReducer from './slices/toolBoxSlice'

export const store = configureStore({
    reducer:{
        menu:MenuReducer,
        toolBox:ToolBoxReducer
    }
})