import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ 
  cartItems = [], 
  searchQuery = "", 
  setSearchQuery = () => {}, 
  handleRemoveFromCart = () => {}
}) => {
  const location = useLocation();

  // Ocultar carrito y buscador solo en la página de contacto
  const hideCartAndSearch = location.pathname === "/contact";

  return (
    <div className="app-wrapper">
      <Navbar
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        hideCartAndSearch={hideCartAndSearch}  
      />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
