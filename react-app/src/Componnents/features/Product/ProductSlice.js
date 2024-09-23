import { createSlice } from '@reduxjs/toolkit'
import { addProduct, deleteProduct, fetchAllProducts, getProductById, getProductByName, updateProduct } from './ProductApi'

const initialState = {
    arrProducts: [],
    currentProduct: null,
    status: null,
    update: false,
    arrCurrentProduct: [],
    price: 0
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToArray: (state, action) => {
            state.arrCurrentProduct = [...state.arrCurrentProduct, action.payload];
            state.price += action.payload.price;
        },
        removeFromArray: (state, action) => {
            let index = state.arrCurrentProduct.findIndex(x => x.id == action.payload.id)
            state.arrCurrentProduct.splice(index, 1);
            state.price -= action.payload.price;
        },
        reset:(state,action)=>{
            console.log("reset");
            state.arrCurrentProduct=[]
        }
    },

    extraReducers: (builder) => {
        // 1
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.arrProducts = action.payload;
            state.status = "fulfilled";
        })
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = "failed";
            })
            //2
            .addCase(getProductById.fulfilled, (state, action) => {
                state.currentProduct = action.payload;
                state.status = "fulfilled";
            })
            .addCase(getProductById.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.status = "rejected";
            })
            //3
            .addCase(getProductByName.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(getProductByName.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getProductByName.rejected, (state, action) => {
                state.status = "rejected";
            })
            //4
            .addCase(addProduct.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(addProduct.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = "rejected";
            })
            //5
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(deleteProduct.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = "rejected";
            })
            //6
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.currentProduct = action.meta.arg
                state.update = !state.update
            })
            .addCase(updateProduct.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = "rejected";
            })
    }
})
export const { addToArray, removeFromArray ,reset} = ProductSlice.actions
export default ProductSlice.reducer
