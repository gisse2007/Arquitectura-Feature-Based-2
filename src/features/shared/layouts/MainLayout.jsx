import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ 
  cartItems = [], 
  searchQuery = "", 
  setSearchQuery = () => {}, 
  handleRemoveFromCart = () => {}
}) => {
  return (
    <div className="app-wrapper">
      {/* Navbar recibe carrito y buscador */}
      <Navbar
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Aquí se renderiza la página activa */}
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;



