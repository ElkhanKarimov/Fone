
import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: []
  },
  reducers: {
    addBasket: (state, action) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem('basket', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.reduce((accumulator, currentItem) => {
        if (currentItem.id === action.payload.id) {
          if (currentItem.count > 1) {
            accumulator.push({ ...currentItem, count: currentItem.count - 1 });
          }
        } else {
          accumulator.push(currentItem);
        }
        return accumulator;
      }, []);
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
  }
});

export const { addBasket, removeItem } = BasketSlice.actions;

export default BasketSlice.reducer;








// import { createSlice } from "@reduxjs/toolkit";

// export const BasketSlice=createSlice({
//     name:"basket",
//     initialState:{
//         items: [],
        
//     },
//     reducers:{
//         addBasket:(state,action)=>{
//             const existingIndex=state.items.findIndex(item=>item.id===action.payload.id)
//             if (existingIndex>=0) {
//                 state.items[existingIndex].count+=1
//                 localStorage.setItem("basket",JSON.stringify(state.items))
//             }         
//             else{
//                 state.items.push(action.payload)
//                 localStorage.setItem("basket",JSON.stringify(state.items))
//             }
//             state.total=state.items.reduce((price,item)=>price+=item.price*item.count, 0)
//         },
//         changeCount:(state,action)=>{
//             const existingIndex=state.items.findIndex(product=>product.id===action.payload.id)
//             if (state.items[existingIndex].count>1) {
//                 state.items[existingIndex].count-=1
//                 localStorage.setItem("basket",JSON.stringify(state.items))
//             }
//             else{
//                 state.items.filter(product=>product.id!==action.payload.id)
//             }
//             localStorage.setItem("basket",JSON.stringify(state.items))
//             state.total=state.items.reduce((price,item)=>price+=item.price*item.count, 0)
//         },
//         removeBasket:(state,action)=>{
//             state.items=state.items.filter(product=>product.id!==action.payload)
//             localStorage.setItem("basket",JSON.stringify(state.items))
          
//         },
    
       
//     }
// })

// export const {addBasket,changeCount,removeBasket,saleBasket,removeSale}=BasketSlice.actions
// export default BasketSlice.reducer
