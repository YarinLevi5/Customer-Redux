import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

export const uiOfTheApp = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<boolean>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = uiOfTheApp.actions;
export default uiOfTheApp.reducer;
