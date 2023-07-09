import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


const carTypeSelector = (state: RootState) => state.carType.name;
const pricePlanSelector = (state: RootState) => state.payPlan.value;
const dateSelector = (state: RootState) => state.date.date;
const extraDetailsSelector = (state: RootState) => ({ ...state.extraDetails });




export const combinedSelector = createSelector(
  carTypeSelector,
  pricePlanSelector,
  dateSelector,
  extraDetailsSelector,
  (carType, pricePlan, date, extraDetails) => ({
    carType,
    pricePlan,
    date,
    extraDetails
  })
);


