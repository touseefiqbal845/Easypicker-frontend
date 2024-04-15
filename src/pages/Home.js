import NavBar from "../features/navbar/Navbar-admin";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footerfirst";

function Products() {
  return (
    <>
      <div>
        <NavBar />
        <ProductList />
      </div>
      <Footer />
    </>
  );
}

export default Products;
