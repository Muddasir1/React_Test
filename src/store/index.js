import { configureStore } from "@reduxjs/toolkit";
import employeeService from "./services/employeeService";

const Store = configureStore({
  reducer: {
    [employeeService.reducerPath]: employeeService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([employeeService.middleware]),
});

export default Store;
