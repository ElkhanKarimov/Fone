
// import { configureStore } from "@reduxjs/toolkit";
// import BasketSlice from "./slice/BasketSlice";
// // import ProductSlice from "./slice/ProductSlice";


// export const Store=configureStore({
//     reducer:{
//         basket:BasketSlice,
//         // products:ProductSlice
//     }
// })


import {
    configureStore
} from '@reduxjs/toolkit'
import CategorySlice from '../src/slice/CategorySlice'
import BasketSlice from '../src/slice/BasketSlice'


export const Store = configureStore({
    reducer: {
        categories: CategorySlice,
        basket: BasketSlice
    }
})