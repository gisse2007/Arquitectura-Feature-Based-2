import Banner from "../components/Banner";
import ProductsCard from "../../products/components/ProductsCard";

const DashboardPage = ({ handleAddToCart, searchQuery }) => {
  return (
    <>
      <Banner />
      <section>
        <h1 className="tituloCatalogo">Catálogo de Productos</h1>
        <ProductsCard addToCart={handleAddToCart} searchQuery={searchQuery} />
      </section>
    </>
  );
};

export default DashboardPage;

