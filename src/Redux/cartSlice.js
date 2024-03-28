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

//to export addTocart action
export const { addTocart } = cartSlice.actions;
//to export reducers
export default cartSlice.reducer;
