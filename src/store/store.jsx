import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import modalReducer from "./modalSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    modal: modalReducer,
    cart: cartReducer,
  },
});

export default store;
