import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsCard = ({ addToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("loading"); // "loading" | "error" | "success"

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  const next = () => currentIndex < filtered.length - 3 && setCurrentIndex((i) => i + 1);
  const prev = () => currentIndex > 0 && setCurrentIndex((i) => i - 1);

  if (status === "loading") return <p className="cargandoProductos">Cargando productos…</p>;
  if (status === "error") return <p>No se pudieron cargar los productos.</p>;

  return (
    <div className="catalog-container" id="catalogo">
      <div className="carousel">
        <button className="arrow left" onClick={prev} disabled={currentIndex <= 0}>❮</button>
        <div className="carousel-track">
          {filtered.slice(currentIndex, currentIndex + 3).map((p) => (
            <ProductCard key={p.id} {...p} addToCart={addToCart} />
          ))}
        </div>
        <button
          className="arrow right"
          onClick={next}
          disabled={currentIndex >= filtered.length - 3}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
