import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./reducers/customerReducer";
import UIReducer from "./reducers/UIReducer";
export const store = configureStore({
  reducer: {
    createCustomer: customerReducer,
    uiMode: UIReducer,
  },
});
