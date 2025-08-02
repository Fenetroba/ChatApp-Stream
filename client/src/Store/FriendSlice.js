import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../lib/Axois'
const initialState={
     friends:null,
     isLoadng:false,
}

export const CreateRequest= createAsyncThunk('/request',async(data,{rejectwithValue})=>{


     try {
          const respond= await api.post('/request',data)
          return respond.data
     } catch (error) {
          console,log(rejectwithValue.error.data)
     }
})