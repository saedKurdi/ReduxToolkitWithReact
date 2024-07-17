import { FC } from "react";
import { ProductType } from "../../types/ProductType";
import {
  ProductID,
  ProductItem,
  ProductName,
  ProductPrice,
  ProductQuantity,
} from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/Products/productsSlice";

interface IProduct {
  product: ProductType;
}

export const Product: FC<IProduct> = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };
  return (
    <ProductItem>
      <ProductID>ID - {product.id}</ProductID>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>Price : {product.price} $</ProductPrice>
      <ProductQuantity>Quantity : {product.quantity}</ProductQuantity>
      <i
        onClick={() => addProductToCart(product)}
        className="fa-solid fa-cart-shopping"
      ></i>
    </ProductItem>
  );
};
