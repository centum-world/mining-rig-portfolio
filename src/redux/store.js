// store.js
import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";

const store = configureStore({
  reducer: {
    colors: colorSlice,
  },
});

export default store;
