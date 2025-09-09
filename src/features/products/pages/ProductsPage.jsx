import ProductsCard from "../components/ProductsCard";

const ProductsPage = ({ handleAddToCart, searchQuery }) => {
  return (
    <section>
      <h1 className="tituloCatalogo"> Catálogo de Productos</h1>
      <ProductsCard addToCart={handleAddToCart} searchQuery={searchQuery} />
    </section>
  );
};

export default ProductsPage;



