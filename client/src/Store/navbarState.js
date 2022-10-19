import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'open',
    initialState:{open: false,isLogin:true },
    reducers:{
          handleOpen(state,action){
          state.open=action.payload;
           },
          handleClose(state,action){
          state.open=action.payload;
           },
           LoginTrue(state,action){
            state.isLogin=action.payload;
           },
           LoginFalse(state,action){
            state.isLogin=action.payload;
           }
           
    }
  
  })
  
  export const actions =counterSlice.actions;
  
  const store=configureStore({
    reducer:counterSlice.reducer
  })
  export default store;