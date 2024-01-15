// store.js
import { configureStore } from '@reduxjs/toolkit';
import colorSlice from './colorSlice';
import darkModeSlice from './darkModeSlice';

const store = configureStore({
  reducer: {
    colors: colorSlice,
    darkMode: darkModeSlice, 
  },
});

export default store;
