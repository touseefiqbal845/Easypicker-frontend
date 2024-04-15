import AdminProductList from "../features/admin/components/AdminProductList";
import Footer from "../features/common/Footerfirst";
import NavBar from "../features/navbar/Navbar-admin";

function AdminHome() {
  return (
    <>
      <NavBar />
      <AdminProductList />
      <Footer />
    </>
  );
}

export default AdminHome;
