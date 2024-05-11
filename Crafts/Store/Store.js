import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./Categories/CategoriesSlice"
import Accessory from "./Categories/Accessory";

const store = configureStore({
    reducer:{
        categories: CategoriesSlice , Accessory
    }
});

export default store; 