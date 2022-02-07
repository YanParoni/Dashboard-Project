import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  name: "mode",
  initialState: "light",
  reducers: {
    change: (state, { payload }) => {
        if(payload===true){
           return state = 'light';
        }
        else{
            return state='dark'
        }
    },
  },
});
export const {change} = switchSlice.actions;

export default switchSlice.reducer;