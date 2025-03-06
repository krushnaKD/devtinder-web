import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addfeed: (state,action) => {
      return action.payload;
    },
    removefromfedd: (state,action) => {
      const newArray = state.filter(user => user._id !== action.payload)
      return newArray
    },
  },
});

export const { addfeed, removefromfedd } = feedSlice.actions;

export default feedSlice.reducer;
