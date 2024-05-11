import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../firebase/config';

const initialState = []
export const fetchCategrioes = createAsyncThunk("categories/fetchCategrioes", async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "categorythree"));
        const productsFromFirestore = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return productsFromFirestore;
    }
    catch (error) {
        return error
    }

})

const categoriesSlice3 = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state = action.payload
            console.log(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategrioes.fulfilled, (state, action) => {
            state = action.payload
            return state
        })
    }
});

export const { setCredentials } = categoriesSlice3.actions;

export default categoriesSlice3.reducer

export const selectMyCategories = (state) => state.categories