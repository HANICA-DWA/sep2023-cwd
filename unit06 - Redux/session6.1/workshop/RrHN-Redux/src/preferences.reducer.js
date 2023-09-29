import { createSlice } from "@reduxjs/toolkit";

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    color: "orange",
    listSize: 42,
  },
  reducers: {
    changeColor: (state, action) => ({ ...state, color: action.payload }),
  },
});

// Action creators are generated for each case reducer function
export const { changeColor } = preferencesSlice.actions;

export default preferencesSlice.reducer;
