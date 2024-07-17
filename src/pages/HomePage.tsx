import { FC, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ContactsPage from "./ContactsPage";
import Cart from "../components/Cart/Cart";

export const HomePage: FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "52px",
          marginBottom: "50px",
        }}
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contacts"}>Contacts</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </div>
      <Suspense fallback={<div>LOADING ....</div>}>
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </>
  );
};
