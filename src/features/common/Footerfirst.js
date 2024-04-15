import React from "react";

const Footer = () => {
  return (
    <div classNam="">
      <footer className="bg-black text-white p-8 footer-top">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl font-bold">EasyPicker.pk </h1>
            <p className="mt-4">
              Choose you favourite products, brand here. we serve to you
            </p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Shop</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#">New Arrivals</a>
              </li>
              <li className="mb-2">
                <a href="#">Best Sellers</a>
              </li>
              <li className="mb-2">
                <a href="#">Sale</a>
              </li>
              <li>
                <a href="#">Clearance</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Customer Service</h2>

            <ul className="text-sm">
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Shipping & Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
            <p className="text-center mx-3  text-bold text-white-700 mt-14 text-xl">
              &copy;2023 Touseef . All rights reserved.
            </p>
            <a href="#" className="mt-24 text-xl">
              <i className="fab fa-"></i>
            </a>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-xl">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
