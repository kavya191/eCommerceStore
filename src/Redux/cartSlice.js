import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      state.push(action.payload);
    },
  },
});


export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
