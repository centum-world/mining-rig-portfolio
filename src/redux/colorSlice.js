// colorsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const colorsSlice = createSlice({
  name: "colors",
  initialState: { selectedColor: "#4169E1" },
  reducers: {
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setSelectedColor } = colorsSlice.actions;
export const selectColors = (state) => state.colors;
export default colorsSlice.reducer;
