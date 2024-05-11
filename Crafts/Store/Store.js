import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./Categories/CategoriesSlice"
import CategoriesSlice2 from "./Categories/CategoriesSlice2"
import CategoriesSlice3 from "./Categories/CategoriesSlice3"



const store = configureStore({
    reducer:{
        categories: CategoriesSlice,
        categories2: CategoriesSlice2,
        categories3: CategoriesSlice3
    }
});

export default store; 