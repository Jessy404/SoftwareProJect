import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./Categories/CategoriesSlice"

const store = configureStore({
    reducer:{
        categories: CategoriesSlice
    }
});

export default store; 