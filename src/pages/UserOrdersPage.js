import NavBar from '../features/navbar/Navbar-admin';
import UserOrders from '../features/user/components/UserOrders';
import Footer from "../features/common/Footerfirst";


function UserOrdersPage() {
  return (
    <div>
      <NavBar />
        <UserOrders></UserOrders>
        <Footer/>
    </div>
  );
}

export default UserOrdersPage;
