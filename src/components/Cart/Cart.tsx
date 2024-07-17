import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsInCart,
  getPriceOfAllProductsInCart,
} from "../../redux/features/Products/productsSelectors";

import { ProductsList } from "../Products/styles";
import { ProductItem, ProductName, ProductQuantity } from "../Product/styles";
import {
  addToCart,
  buyAllProductFromCart,
  deleteFromCart,
  deleteFromCartImmediately,
} from "../../redux/features/Products/productsSlice";

export default function Cart() {
  const productsInCart = useSelector(getAllProductsInCart);
  const totalCost = useSelector(getPriceOfAllProductsInCart);
  const dispatch = useDispatch();
  return (
    <>
      <ProductsList>
        {productsInCart.map((product) => (
          <ProductItem key={product.id}>
            <ProductName>{product.name}</ProductName>
            <div style={{ display: "flex" }}>
              <button onClick={() => dispatch(deleteFromCart(product))}>
                -
              </button>
              <ProductQuantity>Quantity : {product.quantity}</ProductQuantity>
              <button onClick={() => dispatch(addToCart(product))}>+</button>
            </div>
            <i
              onClick={() => dispatch(deleteFromCartImmediately(product))}
              className="fa-solid fa-trash-can"
            ></i>
          </ProductItem>
        ))}
      </ProductsList>
      <h3>TOTAL COST : {totalCost}</h3>
      <button onClick={() => dispatch(buyAllProductFromCart())}>
        BUY ALL PRODUCTS{" "}
      </button>
    </>
  );
}
