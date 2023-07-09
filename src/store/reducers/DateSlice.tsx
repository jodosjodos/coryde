import { createSlice } from "@reduxjs/toolkit";
import { getCurrentTime } from "../../hooks/getTime";

export const DateSlice = createSlice({
  name: "date",
  initialState: {
    date: getCurrentTime(), // Convert to ISO 8601 string format
  },
  reducers: {
    changeDate: (state, action) => {
      state.date = action.payload;
    },
  },
});
export const DateActions=DateSlice.actions

