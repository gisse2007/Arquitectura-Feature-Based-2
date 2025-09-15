import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ 
  searchQuery = "", 
  setSearchQuery = () => {}, 
  cartItems = [], 
  handleRemoveFromCart = () => {},
  hideCartAndSearch = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/" }, 
    { name: "Contacto", href: "/contact" }
  ];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Tienda Virtual (Shop Gis)</div>

        <div
          className={`navbar-menu ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}

          {/* Buscador y carrito solo si hideCartAndSearch es falso */}
          {!hideCartAndSearch && (
            <>
              <li className="mobile-only">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </li>

              <li className="mobile-only">
                <div className="cart-container">
                  <button className="cart-button" onClick={toggleCart}>
                    🛒
                    {cartItems.length > 0 && (
                      <span className="cart-count">{cartItems.length}</span>
                    )}
                  </button>

                  {isCartOpen && (
                    <div className="cart-dropdown">
                      <h3>Carrito</h3>
                      {cartItems.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                      ) : (
                        <ul>
                          {cartItems.map((item, index) => (
                            <li key={index}>
                              {item.title} - ${item.price}
                              <button onClick={() => handleRemoveFromCart(index)}>
                                 ❌
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}

                      {cartItems.length > 0 && (
                        <p>
                          <strong>
                            Total: $
                            {cartItems.reduce((acc, item) => acc + item.price, 0)}
                          </strong>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
