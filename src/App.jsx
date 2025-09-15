import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./features/shared/layouts/MainLayout";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import ProductsPage from "./features/products/pages/ProductsPage";
import ContactPage from "./features/cart/pages/ContactPage";
// import CartPage from "./features/cart/pages/CartPage";

function App() {
  // Estado global 
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //  para agregar al carrito
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // para eliminar un producto
  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Routes>
  <Route
    path="/"
    element={
      <MainLayout
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    }
  >
    <Route
      index
      element={
        <DashboardPage
          handleAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
      }
    />
    <Route
      path="products"
      element={
        <ProductsPage
          handleAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
      }
    />
    <Route path="contact" element={<ContactPage />} />
  </Route>
</Routes>

  );
}

export default App;