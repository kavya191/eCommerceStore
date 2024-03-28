import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../Constants/constant";

export const fetchProducts=createAsyncThunk('productList/fetchProducts',async()=>{
 
    const {data}=await axios(`${BaseUrl}/products`)
    return data
})

//create slice
const productSlice=createSlice({
    name:'productList',
    initialState:{
        loading:false, //show pendind
        allProduct:[],//fullfilled ,store fetched data
        error:''//show error rejected
    },
    
   
    extraReducers:(builder)=>{
        //action
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allProduct=action.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.allProduct=[]
        })
    }
})
export default productSlice.reducer
