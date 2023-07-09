

import { configureStore } from "@reduxjs/toolkit";
import { carSlice } from "./reducers/CarSlice";
import { PayPlanSlice } from "./reducers/PayPlanSlice";
import { DateSlice } from "./reducers/DateSlice";
import { ExtraDetailsSlice } from "./reducers/ExtraDetailsSlice";


const store=configureStore({
reducer:{
   carType:carSlice.reducer,
   payPlan:PayPlanSlice.reducer,
   date:DateSlice.reducer,
   extraDetails:ExtraDetailsSlice.reducer
}
})
export default store

export type RootState=ReturnType< typeof store.getState>