import { products } from "./../../../../data/products";
import { ProductType } from "../../../types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsState {
  allProducts: ProductType[];
  productsInCart: ProductType[];
  totalPriceInCart: number;
}

const productsInitialState: ProductsState = {
  allProducts: products,
  productsInCart: [],
  totalPriceInCart: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      // add product to cart but if it exsists increase its count only :
      const productIndex = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.productsInCart[productIndex].quantity += 1;
      } else {
        state.productsInCart.push({ ...action.payload, quantity: 1 });
      }
      state.totalPriceInCart += action.payload.price;
    },
    // creating two reducers one of them will delete product from cart immediately other will only decrease count :
    deleteFromCart: (state, action: PayloadAction<ProductType>) => {
      const productIndex = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        if (state.productsInCart[productIndex].quantity === 1) {
          state.productsInCart.splice(productIndex, 1);
        } else {
          state.productsInCart[productIndex].quantity -= 1;
        }
      }
      state.totalPriceInCart -= action.payload.price;
    },
    // delete product from cart immediately :
    deleteFromCartImmediately: (state, action: PayloadAction<ProductType>) => {
      // finding product in cart :
      const cartP = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      // decreasing total price as amount of products deleted with their price :
      state.totalPriceInCart -=
        state.productsInCart[cartP].quantity *
        state.productsInCart[cartP].price;
      const productIndex = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.productsInCart.splice(productIndex, 1);
      }
    },
    buyAllProductFromCart: (state) => {
      // removing products from all products and decreasing counts from all products :
      if (state.productsInCart.length === 0) {
        alert("THE CART IS EMPTY !");
        return;
      }
      state.allProducts = state.allProducts.map((p) => {
        const index = state.productsInCart.findIndex(
          (product) => product.id === p.id
        );
        if (index !== -1) {
          p.quantity -= state.productsInCart[index].quantity;
        }
        return p;
      });
      state.productsInCart = [];
      state.totalPriceInCart = 0;
      alert("PURCHASE SUCCESFULL !");
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  deleteFromCartImmediately,
  buyAllProductFromCart,
} = productsSlice.actions;
export default productsSlice.reducer;
