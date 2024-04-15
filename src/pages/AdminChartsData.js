import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChartComponent from "../features/admin/components/AdminCharts";
import NavBar from "../features/navbar/Navbar-admin";
import {
  fetchAllOrdersAsync,
  selectOrders,
} from "../features/order/orderSlice";
import Footer from "../features/common/Footerfirst";

function AdminChartPage() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  const [chartData, setChartData] = useState([]);

  const transformDataForChart = (orders) => {
    const monthlyData = {};

    const allMonths = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(2000, i, 1); // Using a common year (2000) for all months
      return date.toLocaleString("default", { month: "long" });
    });

    allMonths.forEach((month) => {
      monthlyData[month] = { month, totalAmount: 0, orderCount: 0 };
    });

    orders.forEach((order) => {
      const month = new Date(order.createdAt).toLocaleString("default", {
        month: "long",
      });

      // Increment the values for the corresponding month
      monthlyData[month].totalAmount += order.totalAmount;
      monthlyData[month].orderCount += 1;
    });

    return Object.values(monthlyData);
  };

  console.log("transformDataForChart", chartData, orders);
  useEffect(() => {
    //
    dispatch(fetchAllOrdersAsync());

    setChartData(transformDataForChart(orders));
  }, [dispatch, orders]);

  return (
    
    <div>
      <NavBar />
      <section className="text-center text-2xl font-bold texy-black mt-5  bg-white ">
        Customer Total Orders and Amounts
      </section>

      <ChartComponent chartData={chartData} />
      <Footer />
    </div>
  );
}

export default AdminChartPage;
