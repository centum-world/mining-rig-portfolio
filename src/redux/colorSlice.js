// colorsSlice.js
import { createSlice } from "@reduxjs/toolkit";
const getInitialState = () => {
  const storedColor = localStorage.getItem("selectedColor");
  return {
    selectedColor: storedColor ? storedColor : "#4169E1",
  };
};

const colorsSlice = createSlice({
  name: "colors",
  initialState: getInitialState(),
  reducers: {
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
      localStorage.setItem("selectedColor", action.payload);
    },
  },
});

export const { setSelectedColor } = colorsSlice.actions;
export const selectColors = (state) => state.colors;
export default colorsSlice.reducer;
