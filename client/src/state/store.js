import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import postsReducer from "./slices/posts";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
