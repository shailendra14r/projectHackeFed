import { createSlice } from "@reduxjs/toolkit";
const utilitySlice = createSlice({
  name:"utility", 
  initialState:{
    drawer:false,
    token:""
  },
  reducers:{
        setDrawer:(state,action)=>{
          console.log("RUnn");
          state.drawer = !state.drawer;
          return;
        },
        setToken:(state,action)=>{
          state.token = action.payload;
          return;
        }
  }
})

export const { asetDrawer,setToken} = utilitySlice.actions;

export default utilitySlice.reducer;