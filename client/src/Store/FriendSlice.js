import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../lib/Axois';

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};

export const getFriend = createAsyncThunk(
  'friends/getFriend',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/request');
      return response.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error fetching friends");
    }
  }
);

export const friendSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFriend.pending, (state) => {
        state.isLoading = true;
        state.friends = [];
        state.error = null;
      })
      .addCase(getFriend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friends = action.payload;
        state.error = null;
      })
      .addCase(getFriend.rejected, (state, action) => {
        state.isLoading = false;
        state.friends = [];
        state.error = action.payload;
      });
  },
});

export const { clearError, setLoading } = friendSlice.actions;
export default friendSlice.reducer;