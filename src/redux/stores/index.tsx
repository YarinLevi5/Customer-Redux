import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./reducers/customerReducer";
export const store = configureStore({
  reducer: {
    createCustomer: customerReducer,
  },
});
