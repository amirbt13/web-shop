import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import { Helmet } from "react-helmet";

const Store = () => {
  return (
    <div>
      <Helmet>
        <title>Store</title>
      </Helmet>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Store;
