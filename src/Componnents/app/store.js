
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/UserSlice";
import ProductSlice from "../features/Product/ProductSlice";
import LendSlice from "../features/lend/LendSlice"
import CategorySlice from "../features/category/CategorySlice";
import CommentSlice from "../features/comment/CommentSlice";
// import { Category } from "@mui/icons-material";




export const store = configureStore({
    reducer: {
        user: userSlice,
        product:ProductSlice,
        lend:LendSlice,
        category:CategorySlice,
        comment:CommentSlice
    }, 
})
