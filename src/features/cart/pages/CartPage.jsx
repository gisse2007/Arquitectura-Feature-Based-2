const CartPage = ({ cartItems }) => {
  return (
    <section>
      <h1>🛒 Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CartPage;



