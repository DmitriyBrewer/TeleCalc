import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const CALC = createSlice({
  name: "calc",
  initialState: {} ,
  reducers: {
    minHandler:(state, action: PayloadAction<any>) => {
        state = action.payload;
        console.log(state)//выводить значение value.min
        return state;
  },
  smsHandler:(state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
},
gbHandler:(state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
},
checkboxFacebook: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxInstagram: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxVK: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxPinterest: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxLinkedIn: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxWhatsApp: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxTelegram: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxMessage: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxMail: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
  checkboxInbox: (state, action: PayloadAction<any>) => {
    state = action.payload;
    return state;
  },
}});

export const {minHandler} = CALC.actions

export default CALC;