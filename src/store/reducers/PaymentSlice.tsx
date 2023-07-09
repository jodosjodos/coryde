import { createSlice } from "@reduxjs/toolkit";

export const PaymentSlice = createSlice({
  name: "payment",
  initialState: {
    paid: false,
  },
  reducers: {
    changeState: (state) => {
      state.paid = !state.paid;
    },
  },
});

export const PaymentActions = PaymentSlice.actions;
