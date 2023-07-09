

import { configureStore } from "@reduxjs/toolkit";
import { carSlice } from "./reducers/CarSlice";
import { PayPlanSlice } from "./reducers/PayPlanSlice";
import { DateSlice } from "./reducers/DateSlice";
import { ExtraDetailsSlice } from "./reducers/ExtraDetailsSlice";
import { formSubmissionSlice } from "./reducers/FormSubmissionSlice";
import { PaymentSlice } from "./reducers/PaymentSlice";


const store=configureStore({
reducer:{
   carType:carSlice.reducer,
   payPlan:PayPlanSlice.reducer,
   date:DateSlice.reducer,
   extraDetails:ExtraDetailsSlice.reducer,
   formSubmission:formSubmissionSlice.reducer,
   payment:PaymentSlice.reducer
}
})
export default store

export type RootState=ReturnType< typeof store.getState>