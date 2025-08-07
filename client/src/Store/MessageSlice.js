import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../lib/Axois'
const initialState={
     lodading:false,
     message:[],
     error:null,
}
export const GetMessages=createAsyncThunk('/getmessage',async(receiverId,{rejectWithValue})=>{

try {
     const response=await api.get(`/chat/${receiverId}`)
     return response.data;
    
} catch (error) {
    console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error fetching friends");   
}

})
export const SendMessages = createAsyncThunk(
  '/sendmessage',
  async ({ receiverId, data }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/chat/send/${receiverId}`, data);
      return response.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error sending message");
    }
  }
);
export const MessageSlice = createSlice({
     name: 'Message',
     initialState,
     reducers: {
       clearError: (state) => {
         state.error = null;
       },
       setLoading: (state, action) => {
         state.lodading = action.payload;
       },
     },
     extraReducers: (builder) => {
       builder
         .addCase(GetMessages.pending, (state) => {
           state.lodading = true;
           state.message = [];
           state.error = null;
         })
         .addCase(GetMessages.fulfilled, (state, action) => {
           state.lodading = false;
           state.message = action.payload;
           state.error = null;
         })
         .addCase(GetMessages.rejected, (state, action) => {
           state.lodading = false;
           state.message = [];
           state.error = action.payload;
         })
         .addCase(SendMessages.pending, (state) => {
          state.lodading = true;
          state.error = null;
        })
        .addCase(SendMessages.fulfilled, (state, action) => {
          state.lodading = false;
          state.message = action.payload;
          state.error = null;
        })
        .addCase(SendMessages.rejected, (state, action) => {
          state.lodading = false;
          state.message = [];
          state.error = action.payload;
        })
     }})
     
export const { clearError, setLoading } = MessageSlice.actions;
export default MessageSlice.reducer;