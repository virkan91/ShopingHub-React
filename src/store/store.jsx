import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import modalReducer from "./modalSlice";
import CartReducer from "./cartSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    modal: modalReducer,
    cart: CartReducer,
  },
});

export default store;
