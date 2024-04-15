import ProductForm from "../features/admin/components/ProductForm";
import NavBar from "../features/navbar/Navbar-admin";
import Footer from "../features/common/Footerfirst";

function AdminProductFormPage() {
  return (
    <div>
      <NavBar>
        <ProductForm></ProductForm>
      </NavBar>
      <Footer />
    </div>
  );
}

export default AdminProductFormPage;
