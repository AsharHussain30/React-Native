import {createSlice} from '@reduxjs/toolkit';

const MyOrdersSlice = createSlice({
  name: 'MyOrders',
  initialState: [],
  reducers: {
    AddOrders: (state, action) => {
      // const itemInCart = state.find(item => item.id == action.payload.id);
      state.push(action.payload);
    },
  },
});

export const {AddOrders} = MyOrdersSlice.actions;
export default MyOrdersSlice.reducer;
