
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    input:[],
    result:null
}
//this input state will get updated 


//action provider
const calculator=createSlice({
    name:"calc",
    initialState,
    reducers:{
        calcinput:(state,action)=>{
            state.input+=action.payload;
        },
        resultcalc:(state,action)=>{
            state.result=action.payload
        },
        resetcalc:(state,action)=>{
            state.input="";
            state.result = null;
        }
       
    }
})

 export const {calcinput,resetcalc,resultcalc} = calculator.actions;
export default calculator.reducer