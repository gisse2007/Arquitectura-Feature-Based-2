import React from "react";

function ProductCard({ id, image, title, category, description, price, rating, addToCart }) {
  const product = {
    id,
    image,
    title,
    category,
    description,
    price,
    rating,
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="category">Categoría: {category}</p>
      <p className="description">{description}</p>
      <p className="price">${price}</p>

      {rating && (
        <p>
          Valoración: {rating.rate} ⭐ ({rating.count} reseñas)
        </p>
      )}

      <button className="botonCarrito" onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;

