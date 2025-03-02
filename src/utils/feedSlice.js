import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addfeed: (state,action) => {
      return action.payload;
    },
    removefedd: (state,action) => null,
  },
});

export const { addfeed, removefedd } = feedSlice.actions;

export default feedSlice.reducer;
