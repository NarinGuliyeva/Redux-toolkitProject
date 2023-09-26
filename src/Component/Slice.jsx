import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./Items";

const initialState = {
        cartItems:cartItems,
        quantity:2,
        total:0
}

const slice = createSlice({
name:"cart",
initialState,
reducers: {
        clearCart:  (state)=> {
                state.cartItems =[] 
        } ,
        removeItem: (  state,action) => {
                const itemId = action.payload
             state.cartItems=   state.cartItems.filter( (item) =>   item.id !== itemId )
        } ,
        increase: (  state,action ) => {
           const cartItem =   state.cartItems.find( item =>  item.id === action.payload  )
cartItem.quant += 1
        },
        decrease: (  state,action ) => {
                const cartItem =    state.cartItems.find( item =>  item.id === action.payload  )        
     if(  cartItem.quant !==0 ) {
        cartItem.quant -= 1
     }
     else {
  cartItem.quant =0
     }
             },
             totalPrice: (state) => {
                let total = 0;
                let quantity = 0;
                state.cartItems.forEach( (item) =>   {
                        total +=  item.quant * item.price;
                        quantity += item.quant;
                });
                    state.quantity = quantity;
                    state.total = total    
             },    
} ,
}  )

export  const  {clearCart, removeItem,increase,decrease,totalPrice} = slice.actions;
export default  slice.reducer