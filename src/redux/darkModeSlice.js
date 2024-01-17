// darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadDarkModeState = () => {
  try {
    const serializedState = localStorage.getItem('darkModeState');
    return serializedState ? JSON.parse(serializedState) : { isEnabled: false };
  } catch (error) {
    return { isEnabled: false };
  }
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: loadDarkModeState(),
  reducers: {
    toggleDarkMode: (state) => {
      state.isEnabled = !state.isEnabled;
      localStorage.setItem('darkModeState', JSON.stringify(state));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkMode && state.darkMode.isEnabled;
export default darkModeSlice.reducer;
