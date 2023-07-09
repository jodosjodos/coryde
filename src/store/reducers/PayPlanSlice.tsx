import { createSlice } from "@reduxjs/toolkit";

export const PayPlanSlice=createSlice({
    name:"payPlan",
    initialState:{
        value:3000
    },reducers:{
        changeValue:(state,action)=>{
            state.value=action.payload
           
            
        }
    }
})


export const PayPlanAction=PayPlanSlice.actions