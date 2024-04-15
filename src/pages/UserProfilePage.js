import NavBar from '../features/navbar/Navbar-admin';
import UserProfile from '../features/user/components/UserProfile';
import Footer from "../features/common/Footerfirst";


function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <UserProfile></UserProfile>
      </NavBar>
      <Footer/>
    </div>
  );
}

export default UserProfilePage;