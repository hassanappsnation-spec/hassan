import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:null,
  isLoding:false,
  isError:false,
  isSuccess:false,
  massage:""
}

const loginSlice = createSlice({
  name:'login',
  initialState,

  reducers:{
    startLogin:(state)=>{
      state.isLoding=true,
      state.isError=false,
      state.massage=''
    },
    successLogin:(state,action)=>{
      state.isLoding=false,
      state.isLoding=false,
      state.user= action.payload 
    },
    faildLogin:(state,action)=>{
       state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
     logout: (state) => {
      state.user = null;
      state.isSuccess = false;
    }
  }

})


const {faildLogin,logout,startLogin,successLogin} = loginSlice.actions

export default loginSlice.reducer