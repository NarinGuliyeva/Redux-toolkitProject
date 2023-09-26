import { configureStore } from "@reduxjs/toolkit"
import  cartReducer from "./Slice"
// Slice componentindeki slice.reduce -u bu adda tuturam ,default oldugu ucun bunu ede bilerik

export const store  = configureStore({
    reducer:{
        cart:cartReducer,
    }
})