import { RootState } from "../../store";

const getAllProducts = (state: RootState) => state.products.allProducts;
const getAllProductsInCart = (state: RootState) =>
  state.products.productsInCart;
const getPriceOfAllProductsInCart = (state: RootState) =>
  state.products.totalPriceInCart;

export { getAllProducts, getAllProductsInCart, getPriceOfAllProductsInCart };
