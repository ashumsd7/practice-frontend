import { createSlice } from "@reduxjs/toolkit";

const slice1 = createSlice({
  name: "firstSlide",
  initialState: {
    names: ["Ahsutosh", "Alamat", "Jehna"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items.pop();
    },
  },
});

export const { addItem, deleteItem } = slice1.actions;
export default slice1.reducer;
