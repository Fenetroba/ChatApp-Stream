import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../lib/Axois';

const initialState = {
  recommendedUsers: [],
  myFriend:[],
  GoingRequest:[],
  IncomeRequest:[],
  isLoading: false,
  error: null,
};

export const getRecommandedFriend = createAsyncThunk(
  'friends/getFriend',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/user/recommended-users');
      console.log(response.data);
      return response.data;

    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error fetching friends");
    }
  }
);
export const SendRequest = createAsyncThunk(
  'friend/sendrequest',
  async (FriendId, { rejectWithValue }) => {
    try {
      const response = await api.post(`/user/friends-request/${FriendId}`);
      return response.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error SendRequest friends");
    }
  }
);

export const MyFriends=createAsyncThunk('/friends-list',async(_,{rejectWithValue})=>{
  try {
    const response= await api.get('/user/friends-list')
    return response.data;

  } catch (error) {
         console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error fetching friends");
  }
})
export const GetOutGoingRequest=createAsyncThunk('/user/getOutgoingReq',async(_,{rejectWithValue})=>{
  try {
    const response =await api.get('/user/getOutgoingReq')
    return response.data
  } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error in getRecommandedFriend friends");
  }
})
export const IncomeFriendsRequest=createAsyncThunk('/user/friends-request',async(_,{rejectWithValue})=>{
  try {
    const response =await api.get('/user/friends-request')
    return response.data
  } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data || "Error in getRecommandedFriend friends");
  }
})

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
      .addCase(getRecommandedFriend.pending, (state) => {
        state.isLoading = true;
        state.recommendedUsers = [];
        state.error = null;
      })
      .addCase(getRecommandedFriend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommendedUsers = action.payload;
        state.error = null;
      })
      .addCase(getRecommandedFriend.rejected, (state, action) => {
        state.isLoading = false;
        state.recommendedUsers = [];
        state.error = action.payload;
      })
      .addCase(MyFriends.pending, (state) => {
        state.isLoading = true;
        state.myFriend = [];
        state.error = null;
      })
      .addCase(MyFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myFriend = action.payload;
        state.error = null;
      })
      .addCase(MyFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.GoingRequest = [];
        state.error = action.payload;
      })
      .addCase(GetOutGoingRequest.pending, (state) => {
        state.isLoading = true;
        state.GoingRequest = [];
        state.error = null;
      })
      .addCase(GetOutGoingRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.GoingRequest = action.payload;
        state.error = null;
      })
      .addCase(GetOutGoingRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.GoingRequest = [];
        state.error = action.payload;
      })
      .addCase(IncomeFriendsRequest.pending, (state) => {
        state.isLoading = true;
        state.IncomeRequest = [];
        state.error = null;
      })
      .addCase(IncomeFriendsRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.IncomeRequest = action.payload;
        state.error = null;
      })
      .addCase(IncomeFriendsRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.IncomeRequest = [];
        state.error = action.payload;
      });
  },
});

export const { clearError, setLoading } = friendSlice.actions;
export default friendSlice.reducer;