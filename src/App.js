import React from "react";

// Context Provider
import ProductsContextProvider from "./contexts/ProductsContextProvider";

// Components
import Store from "./components/Store";

function App() {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
}

export default App;
