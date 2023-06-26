import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';


let persistConfig = {
  key: 'root',
  storage,
};

let rootReducer = combineReducers({
  cart: cartReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

