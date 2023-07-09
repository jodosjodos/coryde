import { createSlice } from "@reduxjs/toolkit";

export const formSubmissionSlice=createSlice({
    name:"formSubmission",
    initialState:{
        submitted:false
    },
    reducers:{
        changeState:(state)=>{
      
            
            state.submitted=!state.submitted
        
            
        }
    }
})


export const formActions=formSubmissionSlice.actions