import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../lib/Axois';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error:null
};
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {

     try {
       const response = await api.post('/auth/register', userData);
       return response.data;
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
  }) 
  export const LoginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)
export const LogoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/logout');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const  AuthSlice=createSlice({
  name: 'auth',
  initialState,
reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },

     extraReducers: (builder) => {
          builder
          // Registration Users
               .addCase(register.pending, (state) => { 
                    state.loading = true;
                    state.error = null;
               })
               .addCase(register.fulfilled, (state, action) => {
                    state.loading = false;
                    state.user = action.payload;
                    state.isAuthenticated = true;
               })
               .addCase(register.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
               })
     //     Login User
               .addCase(LoginUser.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(LoginUser.fulfilled, (state, action) => {
                    state.loading = false;
                    state.user = action.payload;
                    state.isAuthenticated = true;
               })
               .addCase(LoginUser.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
               })
       // Logout User
               .addCase(LogoutUser.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(LogoutUser.fulfilled, (state) => {
                    state.loading = false;
                    state.user = null;
                    state.isAuthenticated = false;
               })
               .addCase(LogoutUser.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
               })
     },
});


export const { clearError, setLoading } = AuthSlice.actions;
export default AuthSlice.reducer;