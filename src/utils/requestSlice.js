import { createSlice } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    showrequest: (state, action) => action.payload,
    removeRequest: (state, action) => {
      const newArray = state.filter((req) => req._id != action.payload);
      return newArray;
    },
  },
});

export const { showrequest, removeRequest } = RequestSlice.actions;

export default RequestSlice.reducer;
