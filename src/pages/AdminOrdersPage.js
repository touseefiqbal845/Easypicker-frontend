import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/navbar/Navbar-admin";
import Footer from "../features/common/Footerfirst";

function AdminOrdersPage() {
  return (
    <div>
      <NavBar />
      <AdminOrders />
      <Footer />
    </div>
  );
}

export default AdminOrdersPage;
