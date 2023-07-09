import { createSlice } from "@reduxjs/toolkit";

export const ExtraDetailsSlice = createSlice({
  name: "extraDetails",
  initialState: {
    goods: 0,
    sickPeople: 0,
    oldPeople: "No",
    disability: "No",
    NIC: "No",
  },
  reducers: {
    changeDetails: (state, action) => {
        const {goods,sickPeople,oldPeople,disability,NIC}=action.payload
        if(goods) state.goods=goods
        if (sickPeople) state.sickPeople=sickPeople
        if (oldPeople) state.oldPeople=oldPeople
        if (disability) state.disability=disability
        if (NIC) state.NIC=NIC
        
     
        
    },
  },
});

export const ExtraDetailsActions = ExtraDetailsSlice.actions;
