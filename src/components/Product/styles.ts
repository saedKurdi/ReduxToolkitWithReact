import styled from "styled-components";

const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 250px;
  height: 200px;
  background-color: antiquewhite;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProductID = styled.h3`
  font-size: 15px;
`;

const ProductName = styled.p`
  font-weight: bolder;
  font-size: 15px;
  color: chocolate;
`;

const ProductPrice = styled.p`
  font-weight: bolder;
  font-size: 18px;
  color: springgreen;
`;

const ProductQuantity = styled.p`
  font-size: 15px;
`;

export { ProductItem, ProductID, ProductName, ProductPrice, ProductQuantity };
