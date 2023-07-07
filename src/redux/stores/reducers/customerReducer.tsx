import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CustomerModel from "../../../models/Customer.model";

const initialState: CustomerModel = {
  name: "",
  age: 0,
};

export const createCustomerSlice = createSlice({
  name: "create-customer",
  initialState,
  reducers: {
    createCustomerName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    createCustomerAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { createCustomerName, createCustomerAge } =
  createCustomerSlice.actions;
export default createCustomerSlice.reducer;
