import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/Products/productsSelectors";
import { ProductsList } from "./styles";
import { Product } from "../Product/Product";
import { FC } from "react";

export const Products: FC = () => {
  const products = useSelector(getAllProducts);
  return (
    <ProductsList>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsList>
  );
};
