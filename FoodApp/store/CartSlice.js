import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const itemInCart = state.find((item) => item.id == action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }
            else{
                state.push(action.payload);
            }
        },
        remove: (state, action) => {
            const remove = state.filter((item) => item.id !== action.payload.id);
            state = remove
    },
        increment: (state,action) => {
            const itemInCart = state.find((item) => item.id == action.payload.id);
            itemInCart.quantity++;
        },
        decrement: (state,action) => {
            const itemInCart = state.find((item) => item.id == action.payload.id);
            if(itemInCart.quantity == 1){
                const remove = state.filter((item) => item.id !== action.payload.id);
            } else{
                itemInCart.quantity--;
            };
        }


    },
});

export const { add, remove,increment,decrement } = cartSlice.actions;
export default cartSlice.reducer;
