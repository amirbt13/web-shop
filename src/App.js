import React from "react"; 
import { Route, Routes } from "react-router-dom";

// Context Provider
import ProductsContextProvider from "./contexts/ProductsContextProvider";

// Components
import Store from "./components/Store";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <ProductsContextProvider>
      <Header />
      <Routes>
       <Route path="/home" element={<Landing />} />
       <Route path="/store" element={<Store />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
