import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  // createSlice creates reducer and actions for you
  name: "toDosReducer",
  initialState: [],
  reducers: {
    // ensure that you either mutate the state (no need to return if mutated) or return a new state
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() }); // push method mutates the state
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload), // filter method doesn't mutate the state, it returns a new array }
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
