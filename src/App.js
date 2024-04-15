import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "./features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";

import PageNotFound from "./pages/404";
import Home from "./pages/MainWebPage";
import Products from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfilePage from "./pages/UserProfilePage";
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminHome from "./pages/AdminHome";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AlertTemplate from "react-alert-template-basic";
import StripeCheckout from "./pages/StripeCheckout";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/About-us";
import AdminChartPage from "./pages/AdminChartsData";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { positions, Provider } from "react-alert";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/products",
    element: (
      <Protected>
        <Products></Products>
      </Protected>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Protected>
        <Contactus></Contactus>
      </Protected>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Protected>
        <AboutUs></AboutUs>
      </Protected>
    ),
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },

  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: "/admin/product-detail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders-charts",
    element: (
      <ProtectedAdmin>
        <AdminChartPage></AdminChartPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <Protected>
        <OrderSuccessPage></OrderSuccessPage>{" "}
      </Protected>
    ),
  },
  {
    path: "/my-orders",
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>{" "}
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>{" "}
      </Protected>
    ),
  },
  {
    path: "/stripe-checkout/",
    element: (
      <Protected>
        <StripeCheckout></StripeCheckout>
      </Protected>
    ),
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage></ResetPasswordPage>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(
    (user) => {
      if (user) {
        dispatch(fetchItemsByUserIdAsync());
        dispatch(fetchLoggedInUserAsync());
      }
    },
    [dispatch, user]
  );

  return (
    <>
      <div className="App">
        {userChecked && (
          <Provider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
          </Provider>
        )}
      </div>
    </>
  );
}

export default App;
