import {createSlice} from "@reduxjs/toolkit";

const initialState = {

    items : []

}

 const Cartslice = createSlice({

name :'cart',
initialState,
reducers:{ 
    addcar:(state,action)=>{

    state.items.push(action.payload) 
    console.log(state.items)
    

        },

//    removefromcard :(state,actions)=>{
//     const newarray = state.items.filter((items)=> items.id != actions.payload.id) 
//     state.items = newarray



//    }


 }

})

export default Cartslice;