import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Calc {
  id?: any;
  name?: string;
  alpha?: string;
  amount?: string;
  time?: string;
  volume?: string;
  destiny?: string;
  boil?: string;
}

const CALC = createSlice({
  name: "calc",
  initialState: [] as Calc[],
  reducers: {
    saveAction: (state, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    }
  }
});

export default CALC;