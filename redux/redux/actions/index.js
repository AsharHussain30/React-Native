import { ADD_ITEM } from "./actiontype";
import { Remove_ITEM } from "./actiontype";

export const AddItemsToCart = (data) => ({
    type: ADD_ITEM,
    payload: data,
});

export const RemoveItemsToCart = (index) => ({
    type: Remove_ITEM,
    payload: index,
})