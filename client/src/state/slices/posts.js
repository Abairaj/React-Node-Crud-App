import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await api.fetchPosts();
  return response.data;
});

const initialState = { data: null, loading: false, error: null };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    create: (state) => {
      return state.value;
    },
    getPosts: (state) => {
      return state.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
export const { create, getPosts } = postsSlice.actions;
