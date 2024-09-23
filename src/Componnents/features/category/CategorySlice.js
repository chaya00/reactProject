import { createSlice } from '@reduxjs/toolkit'
import { addCategory, deleteCategory, fetchAllCategories, getCategoryById, getCategoryByName, updateCategory } from './CategoryApi'

const initialState = {
    arrCategories: [],
    status: null
}

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    // reducers: (builder) => {

    // },
    extraReducers: (builder) => {
        // 1
        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.arrCategories = action.payload;
            state.status = "fulfilled";
        })
            .addCase(fetchAllCategories.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchAllCategories.rejected, (state, action) => {
                state.status = "failed"
            })
            //2
            .addCase(getCategoryById.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(getCategoryById.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getCategoryById.rejected, (state, action) => {
                state.status = "rejected";
            })
            //3
            .addCase(getCategoryByName.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(getCategoryByName.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getCategoryByName.rejected, (state, action) => {
                state.status = "rejected";
            })
            //4
            .addCase(addCategory.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(addCategory.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.status = "rejected";
            })
            //5
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(deleteCategory.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.status = "rejected";
            })
            //6
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(updateCategory.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.status = "rejected";
            })
    }
})

export default CategorySlice.reducer;
