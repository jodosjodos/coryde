import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "carType",
  initialState: {
    name: "taxi",
  },
  reducers: {
    changeCar: (state, action) => {
        
        state.name = action.payload;
        
    },
  },
});

export const carActions = carSlice.actions;
