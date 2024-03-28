import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        productSlice,
        cartReducer:cartSlice,
    }

})
export default store;
